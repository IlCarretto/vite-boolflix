<script>
import {store} from "../store";

export default {
    name: "ItemCard",
    props: {
        item: Object
    },
    data() {
        return {
            store,
            availableLanguages: ["en", "es", "it", "fr"]
        }
    },
    methods: {
        getFullStars() {
            return Math.round(this.item.vote_average / 2);
        },
        getEmptyStars() {
            return (5 - Math.round(this.item.vote_average / 2));
        },
        getImgUrl(imgName) {
            return new URL(`../../public/${imgName}`, import.meta.url).href;
        }
    },
    computed: {
        getTitle() {
            return this.item.title ? this.item.title : this.item.name;
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        },
        getPosterImg() {
            return this.item.poster_path ? `http://image.tmdb.org/t/p/w342/${this.item.poster_path}` : this.getImgUrl('no_image.jpg');
        },
    }
}
</script>

<template>
    <div class="ms-card">
        <div class="card-img">
            <img :src="getPosterImg" alt="">
        </div>
        <div class="card-desc">
            <h3>Titolo: {{getTitle}}</h3>
            <h4 v-if="getTitle !== getOriginalTitle">Titolo Originale: {{getOriginalTitle}}</h4>
            <img v-if="this.availableLanguages.includes(item.original_language)" :src="getImgUrl(`${item.original_language}.svg`)" alt="">
            <p v-else>{{item.original_language}}</p>
            <p>Voto:
                 <span v-for="fullStar in getFullStars()"><i class="fa-solid fa-star"></i></span>
                 <span v-for="emptyStar in getEmptyStars()"><i class="fa-regular fa-star"></i></span>
            </p>
            <p>Overview: {{this.item.overview}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ms-card {
        border: 1px solid black;
        cursor: pointer;
        height: 400px;

        .card-img {
            width: 100%;
            height: 100%;
        }

        .card-img img {
            width: 100%;
            height: 100%;
            display: block;
        }

        .card-desc {
            width: 100%;
            height: 100%;
            display: none;
            padding: 1rem;
            overflow-y: scroll;
            background-color: black;
            color: white;
        
            img {
                width: 50px;
            }
        }
    }

    .ms-card:hover .card-img {
            display: none;
        }

    .ms-card:hover .card-desc {
        display: block;
    }
</style>