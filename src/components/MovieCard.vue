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
            <h2>{{movie.title}}</h2>
            <h3>{{movie.original_title}}</h3>
            <p>{{movie.original_language}}</p>
            <p>{{movie.vote_average}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ms-card {
        border: 1px solid black;
        min-height: 250px;
    }
</style>