<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <BarChart />
  <Card />
</template>

<script setup>
import BarChart from "./components/BarChart.vue";
import Card from "./components/Card.vue";
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