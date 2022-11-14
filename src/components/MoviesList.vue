<script>
import {store} from "../store";
import MovieCard from "./MovieCard.vue";

export default {
    name: "MoviesList",
    components: {
        MovieCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row row-cols-5 g-4">
                <div v-for="(movie, index) in store.movies" class="col">
                    <MovieCard :movie="movie"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>