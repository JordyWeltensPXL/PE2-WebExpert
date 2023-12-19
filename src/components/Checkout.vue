<template>
  <div class="checkout">
    <h2 class="checkout__title">Checkout</h2>
    <ul class="checkout__list">
      <li v-for="cartItem in cart" :key="cartItem.album.id" class="checkout__item">
        {{ cartItem.album.title }} - Quantity: {{ cartItem.quantity }}
      </li>
    </ul>
    <p class="checkout__total-excl-vat">Total Price (excl. VAT): € {{ totalWithoutVAT.toFixed(2) }}</p>
    <p v-if="!isNaN(vatRate)" class="checkout__vat">VAT ({{ vatRate.toFixed(2) }}%): € {{ vatAmount.toFixed(2) }}</p>
    <p class="checkout__total-incl-vat">Total Price: € {{ formattedTotal }}</p>
    <router-link to="/cart" class="checkout__link"><button>Back to Cart</button></router-link>
  </div>
  <div class="billing-form">
    <div class="billing-form-wrapper">
      <input class="billing-form__checkbox" type="checkbox" v-model="differentBilling" @change="toggleBillingForm">
      <label class="billing-form__label" for="checkbox">Let the billing information differ from the address details.</label>  
    </div>
    <div v-if="differentBilling" class="billing-form__fields">
      <input type="text" v-model="billingData.name" placeholder="Name" class="billing-form__input">
      <input type="text" v-model="billingData.address" placeholder="Address" class="billing-form__input">
    </div>
    <button class="billing-form__submit">Proceed to payment</button>
  </div>
  <input type="checkbox" name="" id="">
</template>

<script>
import { useCartStore } from '@/stores/cart';

export default {
  data() {
    return {
      differentBilling: false,
      billingData: {
        name: '',
        address: ''
      }
    };
  },
  methods: {
    toggleBillingForm() {
    }
  },
  setup() {
    const cartStore = useCartStore();
    const totalWithoutVAT = cartStore.total / 1.21;
    const vatAmount = cartStore.total - totalWithoutVAT;
    const vatRate = (vatAmount / totalWithoutVAT) * 100;

    return {
      cart: cartStore.cart,
      formattedTotal: cartStore.formattedTotal,
      totalWithoutVAT,
      vatAmount,
      vatRate
    };
  }
};
</script>

<style>

</style>