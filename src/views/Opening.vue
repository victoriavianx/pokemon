<script setup lang="ts">
import Image from '@/components/Image.vue'
import Button from '@/components/Button.vue'
</script>

<template>
  <div id="opening" class="bg-amber-400 w-full h-full flex justify-center items-center flex-col">
    <Image
      id="opening-logo"
      source="src/assets/img/pokemon-logo.png"
      description="Logo Pokémon"
      :class="'w-full max-w-xs'"
    />
    <Button id="opening-button" type="button" variant="outlined">Começar</Button>
  </div>
</template>
