import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
  }),
  getters: {
    formattedTotal() {
      const total = this.total;
      const formattedTotal = total.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formattedTotal;
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
      if (
        item.album &&
        typeof item.album.price === "string" &&
        !isNaN(parseFloat(item.album.price))
      ) {
        const price = parseFloat(item.album.price);
        return price * item.quantity;
      }
      return 0;
    },
    addToCart(album) {
      const existingItem = this.cart.find((item) => item.album.id === album.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ album, quantity: 1 });
      }
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
      }
      this.total;
    },
    clearCart() {
      this.cart = [];
    },
  },
});
