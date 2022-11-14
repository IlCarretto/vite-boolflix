<script>
export default {
    name: "SeriesCard",
    props: {
        series: Object
    },
    data() {
        return {
            flagName: ""
        }
    },
    methods: {
        getFlag() {
            if (series.original_language === it) {
                this.flagName = "/italy.svg"
            } else if (series.original_language === en) {
                this.flagName = "/uk.svg"
            } else if (series.original_language === fr) {
                this.flagName = "/fr.svg"
            } else if (movie_original_language === es) {
                this.flagName = "/spain.svg"
            } else {
                this.flagName = series.original_language
            }
        }
    }
}
</script>

<template>
    <div class="ms-card">
        <div class="top-card">

        </div>
        <div class="bottom-card">
            <h3>Titolo: {{series.name}}</h3>
            <h4>Titolo Originale: {{series.original_name}}</h4>
            <img :src="flagName" alt="">
            <p>Voto: {{series.vote_average}}</p>
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