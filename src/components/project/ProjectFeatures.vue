<template>
  <div class="features mb-5">
    <h3 class="mb-4 text-accent-secondary">Основные функции</h3>
    <div class="row">
      <div class="col-md-6 mb-3" v-for="(feature, index) in features" :key="index">
        <div class="d-flex align-items-start">
          <i class="bi bi-check-circle-fill text-accent-primary me-2 mt-1"></i>
          <span>{{ feature }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { projectFeatures } from '@/data/projectData'

const props = defineProps({
  projectId: {
    type: Number,
    required: true,
  },
})

const features = computed(() => projectFeatures[props.projectId] || [])
</script>
