<template>
  <footer class="footer-section">
    <!-- Убрана волна -->
    <div class="footer-content">
      <div class="container" style="padding: 5rem 0 3rem">
        <div class="row text-md-start text-center">
          <!-- Лого + текст -->
          <div class="col-lg-4 mb-4 mb-lg-0 d-flex flex-column justify-content-between">
            <div>
              <h4
                class="d-flex align-items-center justify-content-md-start justify-content-center mb-3"
              >
                <i class="bi bi-android2 me-2 text-accent-primary"></i>
                <span>AndroidDev</span>
              </h4>
              <p class="text-muted-custom mb-0">
                Разработка современных Android-приложений с фокусом на пользовательский опыт и
                производительность.
              </p>
            </div>
          </div>

          <!-- Навигация -->
          <div
            class="col-lg-4 mb-4 mb-lg-0 d-flex flex-column align-items-md-start align-items-center"
          >
            <h5 class="mb-3 text-accent-secondary">Навигация</h5>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <router-link to="/" class="nav-link-footer">Главная</router-link>
              </li>
              <li class="mb-2">
                <router-link to="/projects" class="nav-link-footer">Проекты</router-link>
              </li>
              <li>
                <router-link to="/about" class="nav-link-footer">Обо мне</router-link>
              </li>
            </ul>
          </div>

          <!-- Контакты + соцсети -->
          <div class="col-lg-4 d-flex flex-column align-items-md-start align-items-center">
            <h5 class="mb-3 text-accent-secondary">Контакты</h5>
            <ul class="list-unstyled mb-3">
              <li class="mb-2">
                <i class="bi bi-envelope me-2 text-accent-primary"></i>
                <a
                  href="mailto:ele.zavadskaya.na@gmail.com"
                  class="text-muted-custom text-decoration-none"
                >
                  ele.zavadskaya.na@gmail.com
                </a>
              </li>
              <li class="mb-2">
                <i class="bi bi-telegram me-2 text-accent-primary"></i>
                <a
                  href="https://t.me/mantikkora"
                  class="text-muted-custom text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @mantikkora
                </a>
              </li>
              <li>
                <i class="bi bi-github me-2 text-accent-primary"></i>
                <a
                  href="https://github.com/elena-zavadskaya"
                  class="text-muted-custom text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/elena-zavadskaya
                </a>
              </li>
            </ul>
            <div class="d-flex gap-3">
              <a
                href="https://github.com/elena-zavadskaya"
                class="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="bi bi-github"></i
              ></a>
              <a
                href="https://t.me/mantikkora"
                class="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="bi bi-telegram"></i
              ></a>
            </div>
          </div>
        </div>

        <hr class="custom-hr mt-5 mb-4" />

        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-center text-muted-custom small"
        >
          <p class="mb-2 mb-md-0">&copy; 2025 AndroidDev Portfolio. Все права защищены.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Компонент без props
</script>

<style scoped>
.footer-section {
  background: var(--bg-secondary);
  position: relative;
}

.footer-content {
  background: var(--bg-primary);
  padding-top: 2rem;
}

/* Колонки футера */
.row {
  row-gap: 2rem;
}

@media (min-width: 992px) {
  .col-lg-4:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    padding-right: 2rem;
  }
}

/* Ссылки */
.nav-link-footer {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link-footer:hover {
  color: var(--accent-primary) !important;
}

/* Соц-иконки */
.social-icon {
  color: var(--accent-primary);
  font-size: 1.25rem;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
  color: var(--accent-secondary) !important;
}

/* Разделитель */
.custom-hr {
  border-top: 1px solid var(--accent-secondary);
  opacity: 0.3;
}
</style>
