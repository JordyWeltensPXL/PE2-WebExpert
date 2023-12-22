import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  }),
  getters: {
    formattedTotal() {
      return this.total.toFixed(2);
    },
    total() {
      return this.cart.reduce(
        (total, item) => total + this.getItemTotal(item),
        0
      );
    },
  },
  actions: {
    getItemTotal(item) {
      const price = parseFloat(item.album.price);
      return price * item.quantity;
    },
    addToCart(album) {
      const existingItem = this.cart.find((item) => item.album.id === album.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ album, quantity: 1 });
      }
      this.saveCartToLocalStorage();
    },
    removeFromCart(albumId) {
      const index = this.cart.findIndex((item) => item.album.id === albumId);

      if (index !== -1) {
        const item = this.cart[index];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          this.cart.splice(index, 1);
        }
        this.saveCartToLocalStorage();
      }
    },
    incrementQuantity(cartItem) {
      const index = this.cart.findIndex(
        (item) => item.album.id === cartItem.album.id
      );
      if (index !== -1) {
        this.cart[index].quantity += 1;
        this.saveCartToLocalStorage();
      }
    },
    decrementQuantity(cartItem) {
      const index = this.cart.findIndex(
        (item) => item.album.id === cartItem.album.id
      );
      if (index !== -1 && this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
        this.saveCartToLocalStorage();
      }
    },
    clearCart() {
      this.cart = [];
      this.saveCartToLocalStorage();
    },
    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
});
