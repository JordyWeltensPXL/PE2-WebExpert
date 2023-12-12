<template>
    <div v-for="album in albums" :key="album.id" class="productCard">
        <RouterLink to="/"><img class="productCard__image" :src="album.src" alt=""></RouterLink>
        <div class="productCard__info">
            <p class="productCard__info__headline">{{album.title}}</p>   
            <div class="productCard__info__buy">
                <p class="productCard__info__buy__price">€ {{album.price}}</p>  
                <button class="productCard__info__buy__button">Add to cart</button>
            </div>
            
        </div>    
    </div>
</template>

<script>
import albumsData from "@/albums.json";

export default {
    data() {
        return {
            albums: albumsData 
        }
    }
}
</script>

<style>

</style>