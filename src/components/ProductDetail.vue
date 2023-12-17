<template>
  <div class="detailpage">
    <img class="detailpage__image" :src="'../'+ album.src" alt="">
    <div class="details">
      <p class="details__title">{{album.title}}</p>
      <p class="details__desc">{{album.description}}</p> 
      <p class="details__price">€ {{album.price}} <span>excluding {{ album.VAT }} % VAT.</span></p> 
      <p class="details__stock">{{album.stock}}</p>
      <div class="cart-quantity">
        <button @click="decrementQuantity" class="quantity-button">-</button>
        <span class="quantity">{{ quantity }}</span>
        <button @click="incrementQuantity" class="quantity-button">+</button>
        <button @click="addToCart" class="add-to-cart">
          {{ inCart ? 'Remove from Cart' : 'Add to Cart' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import albumsData from "@/albums.json";

export default {
  data() {
    return {
      album: null,
      albums: albumsData,
      inCart: false,
      quantity: 1,
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      // Simulate adding to cart logic
      if (this.inCart) {
        console.log(`Removing ${this.quantity} ${this.album.title}(s) from the cart`);
      } else {
        console.log(`Adding ${this.quantity} ${this.album.title}(s) to the cart`);
      }

      this.inCart = !this.inCart;
    },
  },
  created() {
    // Access the album ID from the route params
    const albumId = this.$route.params.id;

    // Find the album with the matching ID from your data
    this.album = this.albums.find(album => album.id === albumId);
  },
};
</script>

<style>
</style>