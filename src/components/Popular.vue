<template>
  <div class="popular">
    <div class="popular__section">
      <p class="popular__section__headline">Most Popular Albums</p>
      <div class="popular__section__items">
        <MostPopularAlbums></MostPopularAlbums>
      </div>
      <RouterLink class="popular__section__button" to="/products">View all albums</RouterLink>
    </div>
  </div>
</template>

<script>

import albumsData from "@/albums.json";
import MostPopularAlbums from "@/components/MostPopularAlbums.vue";

export default {
  components: {
    MostPopularAlbums,
    MostPopularAlbums
},
  data() {
    return {
      albums: albumsData,
    }
  }
}
</script>

<style>
</style>