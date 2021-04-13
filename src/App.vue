<template>
  <div>
    <ZoneCard></ZoneCard>
  </div>
</template>

<script setup>
import BarChart from "./components/BarChart.vue";
import ZoneCard from "./components/ZoneCard.vue";

// export default {
//   name: "App",
//   components: {
//     ZoneCard
//   }
// };
</script>

<style>
#app {
  font-family: "Lato", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-evenly;
}
</style>