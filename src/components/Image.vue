<script setup lang="ts">
defineProps<{
  id: string
  source: string
  description: string
}>()
</script>

<template>
  <img :id="id" :src="source" :alt="description" />
</template>
