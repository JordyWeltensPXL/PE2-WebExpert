<template>
  <div class="checkout">
    <h2 class="checkout__title">Checkout</h2>
    <ul class="checkout__list">
      <li v-for="cartItem in cart" :key="cartItem.album.id" class="checkout__item">
        {{ cartItem.album.title }} - Quantity: {{ cartItem.quantity }}
      </li>
    </ul>
    <p class="checkout__total-excl-vat">Total Price (excl. VAT): $ {{ totalWithoutVAT.toFixed(2) }}</p>
    <p v-if="!isNaN(vatRate)" class="checkout__vat">VAT ({{ vatRate.toFixed(2) }}%): $ {{ vatAmount.toFixed(2) }}</p>
    <p class="checkout__total-incl-vat">Total Price: $ {{ formattedTotal }}</p>
    <router-link to="/cart" class="checkout__link"><span>Something missing? </span><button>Back to Cart</button></router-link>
  </div>
  <div class="address__form">
    <form>
      <p class="address__form--title">Delivery</p>
      <label class="address__form--label" for="address">Address:</label><br>
      <input class="address__form--input" v-model="billingData.address" type="text" id="address" name="address" required><br><br>
    
      <label class="address__form--label" for="houseNumber">Number:</label><br>
      <input class="address__form--input" v-model="billingData.number" type="text" id="houseNumber" name="houseNumber" required><br><br>
    
      <label class="address__form--label" for="postalCode">Postal Code:</label><br>
      <input class="address__form--input" v-model="billingData.postalCode" type="text" id="postalCode" name="postalCode" required pattern="[A-Za-z]{1,2}[0-9][A-Za-z0-9]?\s?[0-9][A-Za-z]{2}"><br><br>
    
    </form>
  </div>
  <div class="billing-form">
    <div class="billing-form-wrapper">
      <input class="billing-form__checkbox" type="checkbox" v-model="differentBilling" @change="toggleBillingForm">
      <label class="billing-form__label" for="checkbox">Let the billing information differ from the address details.</label>  
    </div>
    <div v-if="differentBilling" class="billing-form__fields">
      <label for="Name">Name</label>
      <input v-model="billingData.name" type="text" placeholder="Name" class="billing-form__input">
      <label for="Name">Address</label>
      <input v-model="billingData.address" type="text" placeholder="Address" class="billing-form__input">
      <label for="Name">Number</label>
      <input v-model="billingData.number" type="text" placeholder="Number" class="billing-form__input">
      <label for="Name">Postal Code</label>
      <input v-model="billingData.postalCode" type="text" placeholder="Postal Code" class="billing-form__input">
    </div>
    <router-link to="/confirmation" class="billing-form__link"><button class="billing-form__submit">Proceed to payment</button></router-link>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/auth';

export default {
  data() {
    return {
      differentBilling: false,
      billingData: {
        name: '',
        address: '',
      }
    };
  },
  setup() {
    const cartStore = useCartStore();
    const authStore = useAuthStore();

    const storedUser = localStorage.getItem('currentUser');
    const currentUser = storedUser ? JSON.parse(storedUser) : null;

    const totalWithoutVAT = cartStore.total / 1.21;
    const vatAmount = cartStore.total - totalWithoutVAT;
    const vatRate = (vatAmount / totalWithoutVAT) * 100;

    const billingData = {
      name: currentUser ? currentUser.name : '',
      address: currentUser ? currentUser.address : '',
      number: currentUser ? currentUser.number : '',
      postalCode: currentUser ? currentUser.postalCode : ''
    };

    return {
      cart: cartStore.cart,
      formattedTotal: cartStore.formattedTotal,
      totalWithoutVAT,
      vatAmount,
      vatRate,
      billingData
    };
  }
};
</script>

<style>

</style>