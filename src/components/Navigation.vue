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
      const cartStore = useCartStore();
      return cartStore.isEmptyCart;
    },
    cartItemCount() {
      const cartStore = useCartStore();
      return cartStore.getTotalQuantity();
    }
  },
  methods: {
    loginState() {
      const authStore = useAuthStore();
      if (!authStore.isLoggedIn) {
        this.$router.push({ name: 'login' });
        return;
      }
    }
  }
}
</script>

<style>
</style>
