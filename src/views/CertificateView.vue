<template>
  <section class="py-5 position-relative overflow-hidden certificate-page">
    <!-- Анимированный фон как на других страницах -->
    <div class="position-absolute top-0 start-0 w-100 h-100">
      <div
        v-for="i in 12"
        :key="i"
        class="position-absolute rounded-circle"
        :style="getBackgroundStyle(i)"
      ></div>
    </div>

    <div class="container position-relative py-5">
      <div class="row justify-content-center">
        <div class="col-12 text-center mb-5">
          <h2 class="text-accent-secondary fade-in">Мой сертификат</h2>
          <p class="lead text-white fade-in" style="animation-delay: 0.2s">
            Профессиональная сертификация в области разработки
          </p>
        </div>
        <div class="col-12 col-lg-10 col-xl-8 fade-in" style="animation-delay: 0.4s">
          <div class="certificate-container position-relative">
            <div class="certificate-frame">
              <img
                src="/images/certificate.PNG"
                alt="Сертификат разработчика"
                class="img-fluid rounded"
              />
              <div class="certificate-overlay"></div>
            </div>
            <div class="certificate-actions mt-4">
              <button class="btn btn-neon" @click="downloadCertificate">
                <i class="bi bi-download me-2"></i>Скачать
              </button>
              <router-link to="/about" class="btn btn-outline-light">
                <i class="bi bi-arrow-left me-2"></i>Назад
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

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

const downloadCertificate = () => {
  const link = document.createElement('a')
  link.href = '/images/certificate.PNG'
  link.download = 'certificate.PNG'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

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
.certificate-container {
  background: rgba(42, 42, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.certificate-container:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 30px rgba(3, 218, 197, 0.3);
}

.certificate-frame {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.certificate-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(3, 218, 197, 0.1) 0%,
    rgba(3, 218, 197, 0.05) 50%,
    rgba(128, 90, 213, 0.1) 100%
  );
  pointer-events: none;
}

.certificate-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-neon {
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
  border: none;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 120px;
}

/* Простое свечение при наведении */
.btn-neon:hover {
  box-shadow: 0 0 15px rgba(3, 218, 197, 0.7);
}

.btn-outline-light {
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  flex: 1;
  min-width: 120px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-primary);
  color: white;
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
  .certificate-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    width: 100%;
  }

  .certificate-actions .btn {
    width: 100%;
    margin: 0;
    justify-content: center;
  }

  .certificate-container {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .certificate-actions {
    gap: 0.5rem;
  }

  .certificate-actions .btn {
    padding: 0.5rem 1rem;
  }
}
</style>
