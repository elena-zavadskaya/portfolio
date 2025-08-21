<template>
  <div class="certification-section p-4 rounded">
    <h4 class="text-accent-primary mb-3">Сертификация</h4>
    <p class="mb-3">
      <strong>Android-разработчик</strong><br />
      Профессиональная переподготовка от ЯндексПрактикума
    </p>

    <!-- Добавляем кнопку для просмотра сертификата -->
    <router-link to="/certificate" class="btn btn-neon mt-auto" style="width: 100%">
      <i class="bi bi-award me-2"></i>Посмотреть сертификат
    </router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.certification-section {
  grid-area: certification;
  background: rgba(42, 42, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-radius: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.certification-section:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 20px rgba(3, 218, 197, 0.3);
  transform: translateY(-3px);
}

/* Стиль для кнопки */
.btn-neon {
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  border: none;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.btn-neon:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(3, 218, 197, 0.4);
}
</style>
