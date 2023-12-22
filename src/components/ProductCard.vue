<template>
  <div>
      <div class="filters">
          <p>Filter:</p>
          <button class="filters__button" @click="toggleFilter('stock')">In Stock</button>
          <button class="filters__button" @click="toggleFilter('price')">&lt; $ 20</button>
        </div>
      <div class="wrapper">
          <div v-for="album in displayedAlbums" :key="album.id" class="productCard">
            <RouterLink :to="{ name: 'productDetailPage', params: { id: album.id }}">
              <img class="productCard__image" :src="album.src" alt="">
            </RouterLink>
            <div class="productCard__info">
              <p class="productCard__info__headline">{{ album.title }}</p>
              <p class="productCard__info__price">$ {{ album.price }}</p>                
            </div>
          </div>
        </div>

    <div class="pagination">
      <button class="pagination__button" @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button class="pagination__button" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>

  <div class="items-per-page">
      <label class="items-per-page__label" for="itemsPerPage">Items per page:</label>
      <select class="items-per-page__select" v-model="itemsPerPage" @change="handleItemsPerPageChange" id="itemsPerPage">
        <option class="items-per-page__option" value="8">8</option>
        <option class="items-per-page__option" value="16">16</option>
        <option class="items-per-page__option" value="24">24</option>
      </select>
    </div>
</template>

<script>
import albumsData from "@/albums.json";

export default {
  data() {
    return {
      albums: albumsData,
      filters: {
        stock: false,
        price: false,
      },
      itemsPerPage: 8,
      currentPage: 1,
      
    };
  },
  computed: {
    filteredAlbums() {
      return this.albums.filter((album) => {
        const meetsStockCriteria = !this.filters.stock || album.stock >= 1;
        const meetsPriceCriteria =
          !this.filters.price || album.price < 20;

        return meetsStockCriteria && meetsPriceCriteria;
      });
    },
    displayedAlbums() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.filteredAlbums.slice(start, end);
    },
    totalPages() {
    return Math.ceil(this.filteredAlbums.length / this.itemsPerPage);
    },
    },
    methods: {
    toggleFilter(filterType) {
      this.filters[filterType] = !this.filters[filterType];
      this.currentPage = 1;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    handleItemsPerPageChange() {
    this.currentPage = 1;
    },
  },
};
</script>


  
  <style>
  </style>
  