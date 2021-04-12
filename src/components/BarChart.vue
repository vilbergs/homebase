<template>
  <div>
    <h1>{{ msg }}</h1>

    <!-- X og Y -->
    <!-- show bar for each data point -->
    <!-- X = Date -->
    <!-- Y = Water level  -->
    <!-- Water tank height = 700cm -->
    <!-- Given data = CM's from top, Date measured -->

    <div class="bar-chart">
      <div class="bar-chart__y">
        <div
          v-for="(date, index) in state.waterLevels"
          :key="index"
          class="bar-chart__y__element"
        >{{ date }}</div>
      </div>
      <div class="bar-chart__x">
        <div
          v-for="(date, index) in state.dates"
          :key="index"
          class="bar-chart__x__element"
        >{{ index }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String
});

const state = reactive({
  waterLevels: [100, 200, 300, 200, 100],
  dates: [1, 2, 3, 4, 5]
});
</script>

<style scoped>
a {
  color: #42b983;
}

.bar-chart {
  display: flex;
  flex-direction: row;

  width: 500px;
  height: 500px;
  background-color: grey;
}

.bar-chart__x {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: flex-end;
  flex: 1;

  background-color: grey;
}

.bar-chart__x__element {
  padding: 0 12px;
}

.bar-chart__y {
  display: flex;
  flex-direction: column-reverse;
  align-self: flex-end;

  background-color: grey;
}
</style>