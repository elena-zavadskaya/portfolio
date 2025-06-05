<template>
  <div class="hexagon-container">
    <div class="hexagon floating">
      <div class="hexagon-inner">
        <img src="/images/avatar.jpg" alt="Фото Елены Завадской" class="avatar-photo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hexagon-container {
  grid-area: hex;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 200px;
  height: 230px;
  margin: 0 auto;
}

.hexagon {
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  padding: 4px;
}

.hexagon-inner {
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Скрываем части фото за пределами шестиугольника */
}

.avatar-photo {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Заполняем область сохраняя пропорции */
  transition: transform 0.5s ease;
}

.hexagon:hover .avatar-photo {
  transform: scale(1.1); /* Увеличиваем фото при наведении */
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
}

.floating {
  animation: float 6s ease-in-out infinite;
  will-change: transform;
}

@media (max-width: 992px) {
  .hexagon-container {
    width: 180px;
    height: 207px;
  }
}

@media (max-width: 768px) {
  .hexagon-container {
    width: 160px;
    height: 184px;
    margin-bottom: 2rem;
  }
}
</style>
