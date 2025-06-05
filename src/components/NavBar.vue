<template>
  <nav class="navbar navbar-expand-lg navbar-dark py-3 sticky-top custom-navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <i class="bi bi-android2 me-2 text-accent-primary"></i>
        <span class="fw-bold">AndroidDev</span>
      </router-link>

      <!-- Бургер-меню — видно только на мобилках -->
      <button
        class="navbar-toggler custom-toggler d-lg-none"
        type="button"
        @click="toggleActive"
        :class="{ active: isActive }"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- Навигационное меню -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-2">
            <router-link to="/" class="nav-link position-relative" active-class="active">
              Главная
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/projects" class="nav-link position-relative" active-class="active">
              Проекты
            </router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link to="/about" class="nav-link position-relative" active-class="active">
              Обо мне
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isActive = ref(false)
const toggleActive = () => {
  isActive.value = !isActive.value
}
</script>

<style scoped>
.custom-navbar {
  background: rgba(18, 18, 18, 0.9) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1000;
}

.nav-link {
  color: var(--text-primary) !important;
  padding: 0.5rem 0 !important;
  margin: 0 1rem;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link.active {
  color: var(--accent-primary) !important;
}

.nav-link.active::after,
.nav-link:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  box-shadow:
    0 0 10px var(--accent-primary),
    0 0 20px var(--accent-secondary);
}

/* === Бургер-меню === */
.custom-toggler {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 22px;
  padding: 4px;
  border: 1px solid white;
  background-color: transparent;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  border-radius: 6px;
}

.custom-toggler:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 0.25rem rgba(3, 218, 197, 0.4);
}

.custom-toggler .bar {
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 1px;
  transition: background-color 0.3s ease;
}

/* Активное состояние — голубые полоски и рамка */
.custom-toggler.active {
  border-color: var(--accent-primary);
}

.custom-toggler.active .bar {
  background-color: var(--accent-primary);
}
</style>
