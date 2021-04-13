<template>
  <div class="zone">
    <div class="container">
      <div class="temp">
        <h6>Temperature</h6>
        <h1 id="currentTemp">{{ state.Temperature }}Cº</h1>
        <h4>Min: {{ state.minTemp }}Cº</h4>
        <h4>Max: {{ state.maxTemp }}Cº</h4>
      </div>
      <div class="humid">
        <h6>Humidity</h6>
        <h1 id="currentHumid">{{ state.Humidity }}%</h1>
        <h4>Min: {{ state.minHumid }}%</h4>
        <h4>Max: {{ state.maxHumid }}%</h4>
      </div>
    </div>
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  title: String,
})

const state = reactive({
  Temperature: 40,
  Humidity: 32,
  maxTemp: 41,
  minTemp: 12,
  maxHumid: 43,
  minHumid: 28,
})
</script>

<style>
/* Affectrs the main card component */
.zone {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  border-radius: 12px;
  background-color: white;
  margin: 1em;
  border: solid 1px #eaeaea;
  height: 100%;
}

/* Deeper shadow on mouse-over */
.zone:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
}

/* Contains number elements */
.container {
  display: flex;
  justify-content: space-between;
  border-radius: 12px 12px 0px 0px;
  background-color: #fafafa;
  padding-top: 5%;
  padding-bottom: 5%;
  padding: 2em;
}

.temp {
  padding-right: 1em;
}

.humid {
  padding-left: 1em;
}

h2 {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  padding: 12px;
  padding-left: 1em;
}

h1 {
  font-family: 'lato', sans-serif;
  font-size: 3em;
  margin: 0;
  padding: 0;
  padding-bottom: 8px;
}

#currentHumid {
  color: #95c394;
}

#currentTemp {
  color: #f58268;
}

h4 {
  font-family: 'lato', sans-serif;
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 3px;
}
h6 {
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
  font-family: 'lato', sans-serif;
}
</style>
