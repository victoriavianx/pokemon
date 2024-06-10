<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string
    type: 'button' | 'submit' | 'reset'
    variant: 'primary' | 'secondary' | 'outlined'
  }>(),
  {
    variant: 'primary',
    type: 'button'
  }
)

const variantButton = {
  primary: 'bg-amber-500 rounded-sm',
  secondary: 'bg-green-300 rounded-lg',
  outlined: 'bg-transparent border-2 border-amber-300'
}
</script>

<template>
  <button :id="id" :type="type" :class="['w-full max-w-xs h-10', variantButton[variant]]">
    <slot></slot>
  </button>
</template>
