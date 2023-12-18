<template>
  <div class="detailpage">
    <img class="detailpage__image" :src="'../'+ album.src" alt="">
    <div class="details">
      <p class="details__title">{{album.title}}</p>
      <p class="details__desc">{{album.description}}</p> 
      <p class="details__price">€ {{album.price}} <span>excluding {{ album.VAT }} % VAT.</span></p> 
      <p class="details__stock" v-if="hasStock">In Stock</p>
      <p class="details__stock details__stock--out-of-stock" v-else>Out of stock</p>
      <button @click="addToCart" :disabled="!hasStock">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import albumsData from "@/albums.json";
import { useCartStore } from '@/stores/cart';


export default {
  data() {
    return {
      album: null,
      albums: albumsData,
    };
  },
  created() {
    const albumId = this.$route.params.id;
    this.album = this.albums.find(album => album.id === albumId);
  },
  computed: {
  hasStock() {
    return this.album.stock > 1;
  }
},
  methods: {
    addToCart() {
      // Access the cart store
      const cartStore = useCartStore();

      // Add the current album to the cart
      cartStore.addToCart(this.album);
    }
  }
};
</script>

<style>
</style>