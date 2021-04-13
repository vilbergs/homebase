<template>
  <div>
    <h1>Login!</h1>
  </div>

  <router-view></router-view>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String,
})

const state = reactive({})
</script>

<style scoped></style>
