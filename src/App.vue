<script>
import AppHeader from "./components/AppHeader.vue";
import VideosList from "./components/VideosList.vue";
import axios from "axios";
import {store} from "./store";


export default {
  components: {
    AppHeader,
    VideosList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchFor() {
      const paramsObj = {
        api_key: this.store.apiKey,
        query: this.store.searchKey
      }
      this.getVideos(paramsObj);
    },
    getVideos(paramsObj) {
      axios
        .get(`${this.store.apiMovieURL}`, {
          params: paramsObj
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
          console.log(this.store.movies);
        });

      axios
        .get(`${this.store.apiSeriesURL}`, {
          params: paramsObj
        })
        .then((resp) => {
          this.store.series = resp.data.results;
          console.log(this.store.series);
        })
    }
  }
}
</script>

<template>
  <AppHeader @getResearch="searchFor" />
  <VideosList/>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
