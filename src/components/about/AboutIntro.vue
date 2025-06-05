<template>
  <div class="intro-section">
    <p class="lead text-text-secondary">
      Привет! Меня зовут <strong>Елена</strong>, я начинающий
      <span class="text-accent-primary">Android-разработчик</span>. Хотя у меня пока нет
      коммерческого опыта, я активно развиваюсь в разработке под Android и уверенно владею
      современным стеком технологий.
    </p>
  </div>
</template>

<style scoped>
.intro-section {
  grid-area: intro;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

@media (max-width: 768px) {
  .intro-section {
    align-items: flex-start;
    padding: 0;
    margin-bottom: 1rem;
  }
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 0;
}

.text-text-secondary {
  color: var(--text-secondary);
}
</style>
