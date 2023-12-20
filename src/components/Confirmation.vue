<template>
    <div class="transaction-confirmation">
      <h2 class="transaction-confirmation__headline">Transaction Successful!</h2>
      
      <p class="transaction-confirmation__message">Thank you for your purchase. Below are the details of your transaction:</p>
  
      <ul class="transaction-confirmation__list">
        <li v-for="cartItem in cart" :key="cartItem.album.id" class="transaction-confirmation__item">
            <strong>{{ cartItem.album.title }}</strong>
            <p>Quantity: {{ cartItem.quantity }}</p>
            <p>Price: € {{ cartItem.album.price }} each</p>
            <p>VAT ({{ cartItem.album.VAT }}%): € {{ calculateVAT(cartItem.album.price, cartItem.album.VAT) }}</p>
            <p>Subtotal: € {{ calculateSubtotal(cartItem.album.price, cartItem.quantity) }}</p>
        </li>
    </ul>
  
      <p class="transaction-confirmation__total">Total: € {{ formattedTotal }}</p>
  
      <RouterLink to="/products" class="transaction-confirmation__link">Back to products</RouterLink>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '@/stores/cart';
  
  export default {
    setup() {
      const cartStore = useCartStore();
  
      const calculateVAT = (price, VAT) => {
        const vatAmount = (price * VAT) / 100;
        return parseFloat(vatAmount.toFixed(2));
      };
  
      const calculateSubtotal = (price, quantity) => {
        return (price * quantity).toFixed(2);
      };
  
      return {
        cart: cartStore.cart,
        calculateVAT,
        calculateSubtotal,
        formattedTotal: cartStore.formattedTotal
      };
    }
  };
  </script>
  
  <style scoped>
  </style>