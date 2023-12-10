
<script setup>
import ProductCard from '../components/ProductCard.vue'
// export default {

// }
</script>

<template>
    <div class="products">
      <p class="products__headline">Our Soundtrack, Your Way: Browse and Own Your Favorite Albums</p>
      <p class="products__description">Dive into the tunes you love with our collection of music albums. From chart-toppers to hidden gems, find the perfect soundtrack for every moment. Explore now and bring the magic of music into your life!</p>
      <div class="products__filters">
        <p>Filter:</p>
        <button class="products__filters__button">New Release</button>
        <button class="products__filters__button">In Stock</button>
      </div>
      <ul class="products__productCards">
        <li class="products__productCards__card"><ProductCard></ProductCard></li>
      </ul>
    </div>
</template>



<style>

</style>