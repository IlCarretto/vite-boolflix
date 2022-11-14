<script>
export default {
    name: "MovieCard",
    props: {
        movie: Object
    },
    data() {
        return {
            countryFlag: ""
        }
    },
    methods: {
        getFlag() {
            if (movie.original_language === it) {
                this.countryFlag = "/italy.svg"
            } else if (movie.original_language === en) {
                this.countryFlag = "/uk.svg"
            } else if (movie.original_language === fr) {
                 this.countryFlag = "/fr.svg"
            } else if (movie_original_language === es) {
                this.countryFlag = "/spain.svg"
            } else {
                this.countryFlag = movie.original_language
            }
        }
    },
    created() {
        this.getFlag()
    }
}
</script>

<template>
    <div class="ms-card">
        <div class="top-card">
            <img :src="countryFlag" alt="">
        </div>
        <div class="bottom-card">
            <h3>Titolo: {{movie.title}}</h3>
            <h4>Titolo Originale: {{movie.original_title}}</h4>
            <p>Voto: {{movie.vote_average}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ms-card {
        border: 1px solid black;
        min-height: 250px;
        padding: 1rem;
    }
</style>