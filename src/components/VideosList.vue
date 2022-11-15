<script>
import {store} from "../store";
import ItemCard from "./ItemCard.vue";

export default {
    name: "MoviesList",
    components: {
        ItemCard
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
        <section class="movies">
            <div class="container">
                <h2>Film e cortometraggi</h2>
                <div class="row row-cols-5 g-4">
                    <div v-for="(movie, index) in store.movies" class="col">
                        <ItemCard :item="movie"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="series">
            <div class="container">
                <h2>Serie TV</h2>
                <div class="row row-cols-5 g-4">
                    <div v-for="(oneSeries, index) in store.series" class="col">
                        <ItemCard :item="oneSeries"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>