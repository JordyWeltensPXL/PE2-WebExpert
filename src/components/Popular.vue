<template>
  <div class="popular">
    <div class="popular__section">
      <p class="popular__section__headline">Most Popular Albums</p>
      <ul class="popular__section__items">
        <li class="popular__section__items__item"><img src="@/assets/drake.jpg" alt=""></li>
        <li class="popular__section__items__item"><img src="@/assets/Juice-WRLD.webp" alt=""></li>
        <li class="popular__section__items__item"><img src="@/assets/lil-tecca.jpeg" alt=""></li>
        <li class="popular__section__items__item"><img src="@/assets/roddy-ricch.jpg" alt=""></li>
      </ul>
      <button class="popular__section__button"><RouterLink to="/products">View all albums</RouterLink></button>
    </div>
  </div>
</template>

<script>


export default {

}
</script>

<style>

</style>