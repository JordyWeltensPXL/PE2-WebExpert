<template>
  <div class="cart">
    <h2 class="cart__headline">Shopping Cart</h2>
    <div class="cart__empty" v-if="cart.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div class="cart__content" v-else>
      <div class="cart__content-item" v-for="cartItem in cart" :key="cartItem.album.id">
        <div class="cart__content-item-wrapper">
          <img class="cart__content-item-wrapper-image" :src="cartItem.album.src" alt="">
          <div class="cart__content-item-wrapper-info-amount">
            <p class="cart__content-item-title">{{ cartItem.album.title }}</p>
            <div class="cart__content-wrapper">
              <button class="cart__content-button" @click="decrementQuantity(cartItem)">-</button>
              <span class="cart__content-item-quantity">{{ cartItem.quantity }}</span>
              <button class="cart__content-button" @click="incrementQuantity(cartItem)">+</button>
            </div>
            <p class="cart__content-item-VAT">VAT ({{ cartItem.album.VAT }}%): $ {{ calculateVAT(cartItem.album.price, cartItem.album.VAT) }}</p>
            <p class="cart__content-item-price">Price: $ {{ cartItem.album.price }} each</p>
            <p class="cart__content-item-subtotal">Subtotal (per item): $ {{ calculateSubtotal(cartItem.album.price, cartItem.quantity) }}</p>
            <p class="cart__content-item-description">{{ cartItem.album.description }}</p>
          </div>
        </div>
      </div>
      <p class="cart__totalPrice">Total: $ {{ computedTotal }}</p>
      <div class="cart__buttonsWrapper">
        <RouterLink @click="loginState()" to="/checkout"><button class="cart__orderButton">Order Now</button></RouterLink>
        <button class="cart__clearButton" @click="clearCart">Clear Shopping Cart</button>
      </div>
    </div>
  </div>
</template>
  
<script>
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue'; 

export default {
  created() {
    this.cartStore = useCartStore();
    this.authStore = useAuthStore();
  },
  methods: {
    loginState() {
      if (!this.authStore.isLoggedIn) {
        this.$router.push({ name: 'login' });
      }
    }
  },
  
  setup() {
    const cartStore = useCartStore();

    const calculateVAT = (price, VAT) => {
      const vatAmount = (price * VAT) / 100;
      return parseFloat(vatAmount.toFixed(2));
    };

    const calculateSubtotal = (price, quantity) => {
      return (price * quantity).toFixed(2);
    };

    const incrementQuantity = (cartItem) => {
      cartStore.incrementQuantity(cartItem);
    };

    const decrementQuantity = (cartItem) => {
      cartStore.decrementQuantity(cartItem)
};

    const computedTotal = computed(() => cartStore.formattedTotal);

    return {
      cart: cartStore.cart,
      removeFromCart: cartStore.removeFromCart,
      clearCart: cartStore.clearCart,
      calculateVAT,
      calculateSubtotal,
      incrementQuantity,
      decrementQuantity,
      computedTotal
    };
  },
};
</script>

<style>
</style>
