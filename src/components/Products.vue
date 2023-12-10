
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
        <li class="products__productCards__card"><ProductCard></ProductCard></li>
        <li class="products__productCards__card"><ProductCard></ProductCard></li>
        <li class="products__productCards__card"><ProductCard></ProductCard></li>
        <li class="products__productCards__card"><ProductCard></ProductCard></li>
        <li class="products__productCards__card"><ProductCard></ProductCard></li>
        <li class="products__productCards__card"><ProductCard></ProductCard></li>
        <li class="products__productCards__card"><ProductCard></ProductCard></li>
        <li class="products__productCards__card"><ProductCard></ProductCard></li>
        <li class="products__productCards__card"><ProductCard></ProductCard></li>
      </ul>
      <ul class="products__pages">
        <div class="products__pages__items">
          <p class="products__pages__items__text">Items per page</p>
          <select class="products__pages__items__select" name="itemsPerPage" id="itemsPerPage">
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
          </select>
        </div>
        
        <div class="products__pages__list">
          <li class="products__pages____list__listItem"><button class="products__pages__list__listItem__button">1</button></li>
          <li class="products__pages__list__listItem"><button class="products__pages__list__listItem__button">2</button></li>
          <li class="products__pages__list__listItem"><button class="products__pages__list__listItem__button">3</button></li>
          <li class="products__pages__list__listItem"><button class="products__pages__list__listItem__button">4</button></li>  
        </div>
      </ul>
    </div>
</template>



<style>

</style>