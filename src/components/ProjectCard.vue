<template>
  <div class="card-tech h-100 d-flex flex-column overflow-hidden position-relative">
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark" style="z-index: -1"></div>

    <div class="card-img-container position-relative overflow-hidden">
      <img :src="project.imageUrl" :alt="`Обложка проекта ${project.title}`" class="card-image" />
      <div class="overlay d-flex align-items-center justify-content-center">
        <i :class="`bi ${project.icon} display-1 text-white`"></i>
      </div>
    </div>

    <div class="card-body p-4 d-flex flex-column flex-grow-1">
      <div class="flex-grow-1">
        <h5 class="card-title mb-3">{{ project.title }}</h5>
        <p class="card-text text-muted-custom mb-4 line-clamp">{{ project.description }}</p>

        <div class="mb-4">
          <span
            v-for="(tag, i) in project.tags"
            :key="i"
            class="badge bg-dark border border-secondary me-1 mb-1"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="buttons-container mt-auto">
        <a
          v-if="project.codeUrl"
          :href="project.codeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-sm btn-neon"
        >
          Код
        </a>
        <router-link :to="`/projects/${project.id}`" class="btn btn-sm btn-outline-light">
          Подробнее
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const { project } = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      id: null,
      title: 'Проект',
      description: 'Описание проекта',
      tags: [],
      icon: 'bi-app',
      imageUrl: '',
      gradient: ['#6a11cb', '#2575fc'],
      codeUrl: null,
    }),
  },
})
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-line-clamp: 3;

  display: box;
  box-orient: vertical;
  line-clamp: 3;

  max-height: 4.5em;
}

.buttons-container {
  display: flex;
  gap: 0.5rem;
  padding-top: 1rem;
}

.card-tech {
  height: 100%;
}

.card-text {
  line-height: 1.5em;
}

/* Контейнер для изображения */
.card-img-container {
  height: 200px;
  position: relative;
  overflow: hidden;
}

/* Стили для изображения */
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.card-tech:hover .card-image {
  transform: scale(1.05);
}

/* Наложение для иконки */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease;
}

.card-tech:hover .overlay {
  background: rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .line-clamp {
    max-height: 6em;
  }

  .card-img-container {
    height: 180px;
  }
}
</style>
