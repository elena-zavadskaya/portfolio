<template>
  <div class="technologies mb-5">
    <h3 class="mb-4 text-accent-secondary">Использованные технологии</h3>
    <div class="d-flex flex-wrap gap-2">
      <span
        v-for="(tech, i) in technologies"
        :key="i"
        class="badge bg-dark border border-secondary py-2 px-3"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { projectTechnologies } from '@/data/projectData'

const props = defineProps({
  projectId: {
    type: Number,
    required: true,
  },
})

const technologies = computed(() => projectTechnologies[props.projectId] || [])
</script>
