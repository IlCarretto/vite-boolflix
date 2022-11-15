<script>
import {store} from "../store";
export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="title">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="search-bar">
            <input v-model="store.searchKey" class=form-control type="text" placeholder="Cerca una serie">
            <button @click="$emit('getResearch')" class="btn btn-primary">
                Search
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #333;
        margin-bottom: 1rem;

        h1 {
            color: #B81D24;
        }

        .search-bar {
            display: flex;
            height: 40px;
        }
    }
</style>