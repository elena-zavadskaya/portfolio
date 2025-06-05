<template>
  <nav class="navbar navbar-expand-lg navbar-dark py-3 sticky-top custom-navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <i class="bi bi-android2 me-2 text-accent-primary"></i>
        <span class="fw-bold">AndroidDev</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

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

.navbar-toggler {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.25rem rgba(3, 218, 197, 0.25);
}
</style>
