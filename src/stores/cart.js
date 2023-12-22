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
    totalQuantity() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    isEmptyCart() {
      return this.cart.length === 0;
    },
  },
  actions: {
    getTotalQuantity() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    getItemTotal(item) {
      const price = item.album.price;
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
      } else if (this.cart[index].quantity === 1) {
        this.cart.splice(index, 1);
      }
      this.saveCartToLocalStorage();
    },
    clearCart() {
      this.cart.splice(0, this.cart.length);
      this.saveCartToLocalStorage();
    },
    saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
});
