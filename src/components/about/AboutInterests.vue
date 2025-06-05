<template>
  <div class="interests-section p-4 rounded">
    <h4 class="text-accent-primary mb-3">Интересы</h4>
    <p class="mb-0">
      Помимо разработки мобильных приложений, увлекаюсь 3D-моделированием в Blender. В моём
      портфолио вы найдёте несколько работ, созданных во время обучения в университете.
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.interests-section {
  grid-area: interests;
  background: rgba(42, 42, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-radius: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.interests-section:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 20px rgba(3, 218, 197, 0.3);
  transform: translateY(-3px);
}
</style>
