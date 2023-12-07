<template>
  <div class="highlight">
    <div class="highlight__text">
      <h1 class="highlight__text__headline">Signed,<br> Sealed,<br>Delivered.</h1>
      <p class="highlight__text__description">Discover the essence of music authenticity with our hand-signed<br> albums. Each one is a collector's gem, a tangible connection<br> to the artists you love.</p>
      <div class="highlight__text__buttons">
        <RouterLink to="/products"><button class="highlight__text__buttons__button button--primary">Products</button></RouterLink>
        <RouterLink to="/products"><button class="highlight__text__buttons__button button--secondary">View Albums</button></RouterLink>
      </div>
    </div>
    <div class="highlight__images">
      <img class="highlight__images--album" src="@/assets/Juice-WRLD.webp" alt="Juice WRLD album cover">
      <img class="highlight__images--signature" src="@/assets/signature.png" alt="Juice WRLD album cover">  
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
