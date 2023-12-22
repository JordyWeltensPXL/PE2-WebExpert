<template>
  <nav class="navigation">
    <RouterLink to="/" class="navigation__logo">Soundcrate</RouterLink>

    <div class="navigation__links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink class="cartLink" to="/cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <span v-if="!isEmptyCart" class="cart-indicator">{{ cartItemCount }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script>
import { useCartStore } from '@/stores/cart';

export default {
  computed: {
    isEmptyCart() {
      return this.cartStore.isEmptyCart;
    },
    cartItemCount() {
      return this.cartStore.getTotalQuantity();
    }
  },
  created() {
    this.cartStore = useCartStore();
  },
  data() {
    return {
      cartStore: null,
    };
  }
}
</script>


<style>
</style>
