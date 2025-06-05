<template>
  <section class="py-5 position-relative overflow-hidden">
    <!-- Анимированный фон -->
    <div class="position-absolute top-0 start-0 w-100 h-100">
      <div
        v-for="i in 12"
        :key="i"
        class="position-absolute rounded-circle"
        :style="getBackgroundStyle(i)"
      ></div>
    </div>

    <div class="container position-relative py-5">
      <h1 class="text-center text-accent-secondary mb-5 fade-in">Обо мне</h1>

      <!-- Grid-контейнер для выравнивания блоков -->
      <div class="about-grid fade-in" ref="aboutBlock">
        <AboutIntro />
        <AboutAvatar />
        <AboutEducation />
        <AboutContacts />
        <AboutCertification />
        <AboutInterests />
      </div>

      <ProjectsSection />
      <ConferencesSection />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AboutIntro from '@/components/about/AboutIntro.vue'
import AboutAvatar from '@/components/about/AboutAvatar.vue'
import AboutEducation from '@/components/about/AboutEducation.vue'
import AboutContacts from '@/components/about/AboutContacts.vue'
import AboutCertification from '@/components/about/AboutCertification.vue'
import AboutInterests from '@/components/about/AboutInterests.vue'
import ProjectsSection from '@/components/about/ProjectsSection.vue'
import ConferencesSection from '@/components/about/ConferencesSection.vue'

// Создаем ссылку на DOM-элемент для отслеживания появления в области видимости
const aboutBlock = ref(null)

// Функция для генерации стилей анимированных кругов фона
const getBackgroundStyle = (i) => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  width: `${Math.random() * 80 + 40}px`,
  height: `${Math.random() * 80 + 40}px`,
  background: `radial-gradient(circle, ${
    i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)'
  }, transparent)`,
  opacity: 0.05 + Math.random() * 0.1,
  filter: 'blur(20px)',
})

// Инициализация анимации появления при скролле
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  )

  // Применяем анимацию ко всем элементам с классом fade-in
  const elements = document.querySelectorAll('.fade-in')
  elements.forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Общие стили для страницы */
.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  grid-template-areas:
    'intro hex'
    'education contact'
    'certification interests';
}

/* Анимация появления */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1),
    transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Адаптивность */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      'intro'
      'hex'
      'education'
      'contact'
      'certification'
      'interests';
  }
}

/* Добавляем стили для подчеркивания заголовков h4 на странице */
:deep(h4.text-accent-primary) {
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

:deep(h4.text-accent-primary)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--accent-primary);
  border-radius: 2px;
}

:deep(h3.text-accent-secondary) {
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
}

:deep(h3.text-accent-secondary)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), transparent);
  border-radius: 3px;
}
</style>
