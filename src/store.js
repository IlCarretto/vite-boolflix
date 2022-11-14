import {reactive} from "vue";

export const store = reactive({
    series: [],
    movies: [],
    apiMovieURL: "https://api.themoviedb.org/3/search/movie",
    apiSeriesURL: "https://api.themoviedb.org/3/search/tv",
    apiKey: "4b0341d286ad9ffe492ce7da2d3a4d41",
    searchKey: ""
})