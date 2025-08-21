<template>
  <div class="education-section p-4 rounded">
    <h4 class="text-accent-primary mb-3">Образование</h4>
    <p class="mb-3">
      <strong>Московский педагогический государственный университет (МПГУ)</strong><br />
      Направление: «Разработка программно-информационных систем в глобальной экономике»
    </p>
    <a
      href="https://mpgu.su/homempgu/"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-neon d-flex justify-content-center align-items-center mt-auto"
    >
      <i class="bi bi-building me-2"></i> Сайт университета
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
.education-section {
  grid-area: education;
  background: rgba(42, 42, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-radius: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.education-section:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 20px rgba(3, 218, 197, 0.3);
  transform: translateY(-3px);
}

/* Стиль для кнопки - такой же как в AboutCertification.vue */
.btn-neon {
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  border: none;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.btn-neon:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(3, 218, 197, 0.4);
  color: white;
}
</style>
