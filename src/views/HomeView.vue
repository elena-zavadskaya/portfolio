<template>
  <section class="py-5 position-relative overflow-hidden">
    <!-- Анимированный фон -->
    <div class="position-absolute top-0 start-0 w-100 h-100">
      <div
        v-for="i in 15"
        :key="i"
        class="position-absolute rounded-circle"
        :style="getBackgroundStyle(i)"
      ></div>
    </div>

    <div class="container py-5 position-relative">
      <div class="row align-items-center">
        <div class="col-md-6 mb-5 mb-md-0">
          <h1 class="display-3 fw-bold mb-4">
            Привет, я <span class="text-accent-primary">Android</span> разработчик
          </h1>
          <p class="lead text-text-secondary mb-4">
            Создаю элегантные и функциональные мобильные приложения с использованием современных
            технологий
          </p>

          <div class="d-flex flex-wrap gap-3">
            <router-link to="/projects" class="btn btn-neon px-4 py-2"> Мои работы </router-link>
          </div>
        </div>

        <div class="col-md-6 text-center">
          <div class="hexagon-container mx-auto floating">
            <div class="hexagon">
              <div class="hexagon-inner">
                <img src="/images/avatar.jpg" alt="Фото Елены Завадской" class="avatar-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Блок Обо мне -->
      <div class="row mt-5 fade-in" ref="aboutBlock">
        <div class="col-md-10 mx-auto text-center">
          <h2 class="text-accent-secondary mb-3">Обо мне</h2>
          <p class="lead text-muted-custom">
            Меня зовут Елена. Я начинающий Android-разработчик с профильным образованием и опытом
            создания собственных проектов. Умею работать с Kotlin, Compose, архитектурами и
            современными библиотеками.
          </p>
          <router-link to="/about" class="btn btn-neon mt-3 px-4 py-2">Подробнее</router-link>
        </div>
      </div>

      <!-- Стек технологий -->
      <div class="row mt-6 pt-5">
        <div class="col-12">
          <h3 class="text-center mb-4 text-accent-secondary">Мой стек технологий</h3>
          <div class="d-flex justify-content-center flex-wrap gap-4">
            <div
              v-for="(tech, index) in technologies"
              :key="index"
              class="card-tech p-4 text-center fade-in"
              :ref="
                (el) => {
                  if (el) techCards[index] = el
                }
              "
            >
              <i :class="`bi ${tech.icon} display-4 mb-3 text-accent-primary`"></i>
              <h5 class="mb-0">{{ tech.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const technologies = ref([
  { name: 'Kotlin', icon: 'bi-code-slash' },
  { name: 'Jetpack Compose', icon: 'bi-layout-wtf' },
  { name: 'Android SDK', icon: 'bi-phone' },
  { name: 'MVVM', icon: 'bi-diagram-3' },
  { name: 'Firebase', icon: 'bi-cloud' },
  { name: 'Retrofit', icon: 'bi-plug' },
])

const techCards = []
const aboutBlock = ref(null)

const getBackgroundStyle = (i) => {
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 100 + 50}px`,
    height: `${Math.random() * 100 + 50}px`,
    background: `radial-gradient(circle, ${i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)'}, transparent)`,
    opacity: 0.05 + Math.random() * 0.1,
    filter: 'blur(20px)',
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 },
  )

  techCards.forEach((el) => el && observer.observe(el))
  if (aboutBlock.value) observer.observe(aboutBlock.value)
})
</script>

<style scoped>
/* Стили для аватарки на главной странице */
.hexagon-container {
  width: 200px;
  height: 230px;
  position: relative;
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
  overflow: hidden;
}

.avatar-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hexagon:hover .avatar-photo {
  transform: scale(1.1);
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

/* Адаптивность */
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
