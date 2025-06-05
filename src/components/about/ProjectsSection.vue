<template>
  <div class="mt-5 fade-in">
    <div class="projects-section p-4 rounded">
      <h3 class="text-accent-secondary mb-4 section-title">Мои проекты</h3>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="project-card p-3 rounded h-100">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-music-note-beamed text-accent-primary me-2 fs-4"></i>
              <h5 class="mb-0">PlaylistMaker</h5>
            </div>
            <p class="text-text-secondary small mb-3">
              Мобильное приложение для создания плейлистов и прослушивания музыки
            </p>
            <a
              href="https://github.com/elena-zavadskaya/PlaylistMakerApp"
              target="_blank"
              class="btn btn-sm btn-outline-accent d-flex align-items-center"
            >
              <i class="bi bi-github me-2"></i> Исходный код
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="project-card p-3 rounded h-100">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-search text-accent-primary me-2 fs-4"></i>
              <h5 class="mb-0">PocketJob</h5>
            </div>
            <p class="text-text-secondary small mb-3">
              Приложение для поиска вакансий с фильтрами и сохранением избранного
            </p>
            <a
              href="https://github.com/kke-kke/practicum-android-diploma"
              target="_blank"
              class="btn btn-sm btn-outline-accent d-flex align-items-center"
            >
              <i class="bi bi-github me-2"></i> Исходный код
            </a>
          </div>
        </div>

        <!-- Кнопка "Все проекты" -->
        <div class="col-12 text-center mt-4">
          <router-link to="/projects" class="btn btn-neon px-5 py-3">
            <i class="bi bi-grid me-2"></i> Все проекты
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.projects-section {
  background: rgba(42, 42, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-radius: 12px;
}

.projects-section:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 20px rgba(3, 218, 197, 0.3);
  transform: translateY(-3px);
}

.project-card {
  background: rgba(42, 42, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  border-radius: 10px;
}

.project-card:hover {
  transform: translateY(-7px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-color: var(--accent-primary);
}

/* Стили для кнопки "Все проекты" */
.btn-neon {
  background: transparent;
  border: 2px solid var(--accent-primary);
  color: var(--accent-primary);
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  font-size: 1.1rem;
  font-weight: 500;
}

.btn-neon:hover {
  color: var(--bg-primary);
  box-shadow: 0 0 15px var(--accent-primary);
}

.btn-neon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--accent-primary);
  z-index: -1;
  transition: all 0.6s;
}

.btn-neon:hover::before {
  left: 0;
}
</style>
