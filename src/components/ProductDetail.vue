<template>
  <div class="detailpage">
    <img class="detailpage__image" :src="'../'+ album.src" alt="">
    <div class="details">
      <p class="details__title">{{album.title}}</p>
      <p class="details__desc">{{album.description}}</p> 
      <p class="details__price">$ {{album.price}} <span>including {{ album.VAT }} % VAT.</span></p> 
      <p class="details__stock" v-if="hasStock">In Stock</p>
      <p class="details__stock details__stock--out-of-stock" v-else>Out of stock</p>
      <div v-if="hasStock" class="details__quantity">
        <label for="quantity">Aantal:</label>
        <input class="details__quantity-input" type="number" id="quantity" :max="album.stock" :min="1" v-model.number="selectedQuantity" @change="checkQuantity">
        <button class="details__button" @click="addToCart" :disabled="!hasStock">Add to Cart</button>
      </div>
      <div v-if="showMessage" class="details__notification">
        Album(s) added to your shopping cart!
      </div>
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
      showMessage: false,
      selectedQuantity: 1
    };
  },
  created() {
    const albumId = this.$route.params.id;
    this.album = this.albums.find(album => album.id === albumId);
  },
  computed: {
    hasStock() {
      return this.album.stock > 0;
    }
  },
  methods: {
    addToCart() {
      const cartStore = useCartStore();
      for (let i = 0; i < this.selectedQuantity; i++) {
        cartStore.addToCart(this.album);
      }
      this.showNotification();
    },
    showNotification() {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    },
    checkQuantity() {
      if (this.selectedQuantity > this.album.stock) {
        this.selectedQuantity = this.album.stock; 
      }
    }
  }
};
</script>

<style>
</style>