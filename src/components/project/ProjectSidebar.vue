<template>
  <div class="card-tech p-4 mb-4">
    <div class="text-center mb-4">
      <i :class="`bi ${project.icon} display-3 text-accent-primary mb-3`"></i>
      <h4 class="mb-0">{{ project.title }}</h4>
    </div>

    <div class="d-grid gap-2">
      <a
        v-if="project.codeUrl && project.showCodeButton !== false"
        :href="project.codeUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-neon"
      >
        <i class="bi bi-github me-2"></i> Смотреть код
      </a>

      <router-link to="/projects" class="btn btn-outline-light">
        <i class="bi bi-arrow-left me-2"></i> Все проекты
      </router-link>
    </div>
  </div>

  <div v-if="project.imageUrl" class="project-image mb-4">
    <img
      :src="project.imageUrl"
      :alt="`Обложка проекта ${project.title}`"
      class="img-fluid rounded"
    />
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

<style scoped>
.card-tech {
  background: var(--bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.project-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.project-image:hover {
  transform: scale(1.02);
}
</style>
