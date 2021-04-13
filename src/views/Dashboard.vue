<template>
  <div>
    <h1>Dashboard!</h1>
    <div>
      <ZoneCard title="Sovrum" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import ZoneCard from '../components/ZoneCard.vue'

defineProps({
  msg: String,
})

const state = reactive({})
</script>

<style scoped></style>
