<script setup lang="ts">
import MainPage from '@/pages/MainPage.vue';

</script>

<template>
  <MainPage />
</template>

<style>
#app {
  background: radial-gradient(circle at 0% 90%, #0afa 0%, #0af0 35%),
    radial-gradient(circle at 90% 0%, #aafa 0%, #aaf0 45%),
    radial-gradient(circle at 0% 10%, #fff0 20%, #fff4 22%, #fff0 24%),
    radial-gradient(circle at 100% 90%, #fff0 30%, #fff4 34%, #fff0 38%);
  background-color: #023;
}

body {
  scroll-snap-type: y mandatory;
}
</style>
