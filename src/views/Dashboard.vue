<template>
  <div>
    <h1>Dashboard!</h1>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String,
})

const state = reactive({})
</script>

<style scoped></style>
