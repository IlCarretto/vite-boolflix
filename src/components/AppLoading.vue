<script>
export default {
    name: "AppLoading",
}
</script>

<template>
    <div class="container">        
        <div class="loader">
            <div class="img">
                <img src="../assets/ciak-loading.png" alt="">
            </div>
            <h2 class="text-center">..LOADING</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .img {
            animation: rotation 2s infinite ease-in-out;
        }
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>