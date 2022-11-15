<script>
import { getTransitionRawChildren } from 'vue'
import {store} from "../store";

export default {
    name: "ItemCard",
    props: {
        item: Object
    },
    data() {
        return {
            store,
            countryFlag: "",
            countryName: "",
            posterPath: ""
        }
    },
    methods: {
        getFlag() {
            if (this.item.original_language === "it") {
                this.countryFlag = "/italy.svg"
            } else if (this.item.original_language === "en") {
                this.countryFlag = "/uk.svg"
            } else if (this.item.original_language === "fr") {
                 this.countryFlag = "/france.svg"
            } else if (this.item.original_language === "es") {
                this.countryFlag = "/spain.svg"
            } else {
                this.countryName = this.item.original_language
            }
        },
        getPosterImg() {
            this.posterPath = this.store.cardImg + this.item.poster_path;
        },
        getFullStars() {
            // Trasformare il voto in numero intero, poi dividerlo per 2 e il risultato è uguale al numero di stelle piene, la differenza con 5 è il numero di stelle vuote
            return (Math.round(this.item.vote_average)) / 2;
        },
        // getEmptyStars() {
        //     return (Math.round(this.item.vote_average)) / 2 % 5;
        // }
    },
    created() {
        this.getFlag();
        this.getPosterImg();
    },
    computed: {
        getTitle() {
            return this.item.title ? this.item.title : this.item.name;
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        }
    }
}
</script>

<template>
    <div class="ms-card">
        <div class="card-img">
            <img :src="posterPath" alt="">
        </div>
        <div class="card-desc">
            <h3>Titolo: {{getTitle}}</h3>
            <h4>Titolo Originale: {{getOriginalTitle}}</h4>
            <img v-if="countryFlag" :src="countryFlag" alt="">
            <p v-else>{{countryName}}</p>
            <p>Voto:
                 <span v-for="fullStar in getFullStars()"><i class="fa-solid fa-star"></i></span>
                 <!-- <span v-for="emptyStar in getEmptyStars()"><i class="fa-regular fa-star"></i></span> -->
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ms-card {
        border: 1px solid black;
        min-height: 250px;
        padding: 1rem;

        .card-desc img {
            width: 50px;
        }
    }
</style>