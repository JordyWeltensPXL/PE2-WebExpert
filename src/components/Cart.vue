<template>
    <div>
      <h2>Shopping Cart</h2>
      <div v-if="cart.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <div v-for="cartItem in cart" :key="cartItem.album.id" class="cart-item">
          <p>{{ cartItem.album.title }} - Quantity: {{ cartItem.quantity }}</p>
          <button @click="removeFromCart(cartItem.album.id)">Remove</button>
        </div>
        <p>Total: € {{ total }}</p>
        <button @click="clearCart">Clear Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '@/stores/cart';
  
  export default {
    setup() {
      const cartStore = useCartStore();
  
      return {
        cart: cartStore.cart,
        total: cartStore.total,
        removeFromCart: cartStore.removeFromCart,
        clearCart: cartStore.clearCart,
      };
    },
  };
  </script>

<style>

</style>