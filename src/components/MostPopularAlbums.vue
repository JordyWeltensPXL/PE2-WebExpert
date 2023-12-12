<template>
    <div class="mostPopularAlbums" v-for="album in topFourAlbums" :key="album.id">
        <RouterLink to="/products"><img :src="album.src" :alt="album.title"></RouterLink>
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