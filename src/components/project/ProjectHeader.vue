<template>
  <div class="mb-5">
    <h2 class="mb-4">{{ project.title }}</h2>
    <p class="text-muted-custom mb-4">{{ project.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
