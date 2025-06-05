<template>
  <div class="card-tech text-center p-4">
    <i :class="['bi', icon, 'display-4 text-accent-primary mb-3']"></i>
    <h3 class="mb-0">{{ title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String
})
</script>