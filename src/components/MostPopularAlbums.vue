<template>
  <div class="mostPopularAlbums" v-for="album in topFourAlbums" :key="album.id">
    <!-- Use the router-link to navigate to the product detail page -->
    <RouterLink :to="'/products/' + album.id">
      <img :src="album.src" :alt="album.title">
      <div class="mostPopularAlbums__overlay">
        <p class="mostPopularAlbums__overlay__text">{{ album.title }}</p>
      </div>
    </RouterLink>
  </div>
</template>
<script>

import albumsData from "@/albums.json";

export default {
  data() {
    return {
      albums: albumsData,
    }
  },
  computed: {
    topFourAlbums() {
      const sortedAlbums = [...this.albums].sort((a, b) => b.stock - a.stock);
      const topFour = sortedAlbums.slice(0,4);
      return topFour;
    },
  },
}
</script>

<style>

</style>