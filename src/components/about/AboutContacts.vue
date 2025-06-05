<template>
  <div class="contact-section p-4 rounded">
    <h4 class="text-accent-primary mb-3">Контакты</h4>
    <div class="d-flex flex-column gap-2">
      <a
        href="https://t.me/mantikkora"
        target="_blank"
        class="btn btn-contact d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-telegram me-2"></i> @mantikkora
      </a>
      <a
        href="mailto:ele.zavadskaya.na@gmail.com"
        class="btn btn-contact d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-envelope me-2"></i> ele.zavadskaya.na@gmail.com
      </a>
      <a
        href="https://github.com/elena-zavadskaya"
        target="_blank"
        class="btn btn-contact d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-github me-2"></i> GitHub
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.contact-section {
  grid-area: contact;
  background: rgba(42, 42, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-radius: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contact-section:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 20px rgba(3, 218, 197, 0.3);
  transform: translateY(-3px);
}

.btn-contact {
  background: rgba(42, 42, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(3, 218, 197, 0.1);
  z-index: 0;
  transition: all 0.4s ease;
}

.btn-contact:hover {
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.btn-contact:hover::before {
  left: 0;
}
</style>
