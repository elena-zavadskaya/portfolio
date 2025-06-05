<template>
  <div class="mt-5 fade-in">
    <div class="conferences-section p-4 rounded">
      <h3 class="text-accent-secondary mb-4">Участие в конференциях</h3>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="conference-card p-3 rounded h-100 d-flex flex-column">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-database text-accent-primary me-2 fs-4"></i>
              <h5 class="mb-0">PGConf.Russia 2024</h5>
            </div>
            <p class="text-text-secondary small mb-3 flex-grow-1">
              Конференция разработчиков PostgreSQL
            </p>
            <div class="mt-auto">
              <a
                href="https://pgconf.ru/2024"
                target="_blank"
                class="btn btn-sm btn-outline-accent d-flex align-items-center w-100"
              >
                <i class="bi bi-link me-2"></i> Официальный сайт
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="conference-card p-3 rounded h-100 d-flex flex-column">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-trophy text-accent-primary me-2 fs-4"></i>
              <h5 class="mb-0">МТС True Tech Championship 2024</h5>
            </div>
            <p class="text-text-secondary small mb-3 flex-grow-1">Чемпионат для IT-специалистов</p>
            <div class="mt-auto">
              <a
                href="https://truetechchamp.ru/"
                target="_blank"
                class="btn btn-sm btn-outline-accent d-flex align-items-center w-100"
              >
                <i class="bi bi-link me-2"></i> Официальный сайт
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.conferences-section {
  background: rgba(42, 42, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-radius: 12px;
}

.conferences-section:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 20px rgba(3, 218, 197, 0.3);
  transform: translateY(-3px);
}

.conference-card {
  background: rgba(42, 42, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  border-radius: 10px;
}

.conference-card:hover {
  transform: translateY(-7px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-color: var(--accent-primary);
}
</style>
