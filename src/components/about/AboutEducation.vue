<template>
  <div class="education-section p-4 rounded">
    <h4 class="text-accent-primary mb-3">Образование</h4>
    <p>
      <strong>Московский педагогический государственный университет (МПГУ)</strong><br />
      Направление: «Разработка программно-информационных систем в глобальной экономике»
    </p>
    <a
      href="https://mpgu.su/homempgu/"
      target="_blank"
      class="btn btn-sm btn-outline-accent d-inline-flex align-items-center mt-2"
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
</style>
