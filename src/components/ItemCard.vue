<script>
import { getTransitionRawChildren } from 'vue'

export default {
    name: "ItemCard",
    props: {
        item: Object
    },
    data() {
        return {
            countryFlag: "",
            countryName: ""
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
        }
    },
    created() {
        this.getFlag()
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
        <div class="top-card">
        </div>
        <div class="bottom-card">
            <h3>Titolo: {{getTitle}}</h3>
            <h4>Titolo Originale: {{getOriginalTitle}}</h4>
            <img v-if="countryFlag" :src="countryFlag" alt="">
            <p v-else>{{countryName}}</p>
            <p>Voto: {{item.vote_average}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ms-card {
        border: 1px solid black;
        min-height: 250px;
        padding: 1rem;

        img {
            width: 50px;
        }
    }
</style>