<template>
  <nav class="navbar navbar-expand-lg navbar-dark py-3 sticky-top custom-navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <i class="bi bi-android2 me-2 text-accent-primary"></i>
        <span class="fw-bold">AndroidDev</span>
      </router-link>

      <button
        class="navbar-toggler d-lg-none custom-toggler"
        type="button"
        @click="toggleActive"
        :class="{ active: isActive }"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div :class="['collapse navbar-collapse', { show: isActive }]" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-2" @click="closeMenu">
            <router-link to="/" class="nav-link position-relative" active-class="active">
              Главная
            </router-link>
          </li>
          <li class="nav-item mx-2" @click="closeMenu">
            <router-link to="/projects" class="nav-link position-relative" active-class="active">
              Проекты
            </router-link>
          </li>
          <li class="nav-item mx-2" @click="closeMenu">
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
const closeMenu = () => {
  isActive.value = false
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

.custom-toggler {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 24px;
  padding: 4px;
  border: 1px solid white !important;
  background-color: transparent !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.custom-toggler:focus {
  outline: none;
  border-color: var(--accent-primary) !important;
  box-shadow: 0 0 0 0.25rem rgba(3, 218, 197, 0.4) !important;
}

.custom-toggler .bar {
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 1px;
  transition: background-color 0.3s ease;
}

.custom-toggler.active {
  border-color: var(--accent-primary) !important;
}

.custom-toggler.active .bar {
  background-color: var(--accent-primary);
}

.navbar-toggler-icon {
  display: none !important;
}
</style>
