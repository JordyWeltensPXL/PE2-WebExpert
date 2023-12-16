<template>
    <div>
      <div class="products__filters">
        <p>Filter:</p>
        <button class="products__filters__button" @click="filterByStock">&lt; 40 in stock</button>
        <button class="products__filters__button" @click="filterByPrice">&lt; € 20</button>
      </div>
      <div v-for="album in displayedAlbums" :key="album.id" class="productCard">
        <RouterLink to="/">
          <img class="productCard__image" :src="album.src" alt="">
        </RouterLink>
        <div class="productCard__info">
          <p class="productCard__info__headline">{{ album.title }}</p>
          <div class="productCard__info__buy">
            <p class="productCard__info__buy__price">€ {{ album.price }}</p>
            <button class="productCard__info__buy__button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import albumsData from "@/albums.json";
  
  export default {
    data() {
      return {
        albums: albumsData,
        displayedAlbums: albumsData, // Initially set displayedAlbums to all albums
      };
    },
    methods: {
      filterByStock() {
        // Filtering albums with stock less than 40
        this.displayedAlbums = this.albums.filter((album) => album.stock < 40);
      },
      filterByPrice() {
        // Filtering albums with price less than 20
        this.displayedAlbums = this.albums.filter(
          (album) => parseFloat(album.price.replace(",", ".")) < 20
        );
      },
    },
  };
  </script>
  
  <style>
    /* Add your styles here */
  </style>
  