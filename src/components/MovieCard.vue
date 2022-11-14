<script>
import {store} from "../store";

export default {
    name: "MovieCard",
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="ms-card">
        <div class="top-card">

        </div>
        <div class="bottom-card">
            <h3>Titolo: {{movie.title}}</h3>
            <h4>Titolo Originale: {{movie.original_title}}</h4>
            <!-- <img v-if="" :src="" alt=""> -->
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