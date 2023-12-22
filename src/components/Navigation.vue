<template>
  <nav class="navigation">
    <RouterLink to="/" class="navigation__logo">Soundcrate</RouterLink>

    <div class="navigation__links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink class="cartLink" @click="loginState()" to="/cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <span v-if="!isEmptyCart" class="cart-indicator">{{ cartItemCount }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/auth';

export default {
  computed: {
    isEmptyCart() {
      return this.cartStore.isEmptyCart;
    },
    cartItemCount() {
      return this.cartStore.getTotalQuantity();
    }
  },
  methods: {
    loginState() {
      if (!this.authStore.isLoggedIn) {
        this.$router.push({ name: 'login' });
      }
    }
  },
  created() {
    this.cartStore = useCartStore();
    this.authStore = useAuthStore();
  },
  data() {
    return {
      cartStore: null,
      authStore: null
    };
  }
}
</script>


<style>
</style>
