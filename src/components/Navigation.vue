<template>
    <nav class="navigation">
        <RouterLink to="/" class="navigation__logo">Soundcrate</RouterLink>

        <div class="navigation__links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/products">Products</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink @click="loginState()" to="/cart"><i class="fa-solid fa-cart-shopping"></i></RouterLink>
        </div>
      </nav>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
export default {
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