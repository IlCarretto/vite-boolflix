<script>
import AppHeader from "./components/AppHeader.vue";
import MoviesList from "./components/MoviesList.vue";
import axios from "axios";
import {store} from "./store";


export default {
  components: {
    AppHeader,
    MoviesList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      axios
        .get(`${this.store.apiMovieURL}?api_key=${this.store.apiKey}&query=${this.store.searchKey}`)
        .then((resp) => {
          this.store.movies = resp.data.results;
          console.log(this.store.movies);
        })
    }
  }
}
</script>

<template>
  <AppHeader @getResearch="getMovies" />
  <MoviesList/>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
