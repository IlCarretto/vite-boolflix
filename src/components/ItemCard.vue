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
            return Math.round(this.item.vote_average / 2);
        },
        getEmptyStars() {
            return (5 - Math.round(this.item.vote_average / 2));
        }
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
                 <span v-for="emptyStar in getEmptyStars()"><i class="fa-regular fa-star"></i></span>
            </p>
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
            display: none;
            padding: 1rem;
        
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