<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  width?: string | number
  height?: string | number
}>()

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    return props.src
  }
  return props.src
})
</script>

<template>
  <img :src="refinedSrc" :alt="alt" :width="width" :height="height" />
</template>
