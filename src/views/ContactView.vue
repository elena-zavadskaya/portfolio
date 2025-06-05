<template>
  <div class="container py-5 position-relative">
    <!-- Анимированный фон (как на главной) -->
    <div class="position-absolute top-0 start-0 w-100 h-100">
      <div v-for="i in 10" :key="i" 
           class="position-absolute rounded-circle"
           :style="{
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             width: `${Math.random() * 100 + 50}px`,
             height: `${Math.random() * 100 + 50}px`,
             background: `radial-gradient(circle, ${i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)'}, transparent)`,
             opacity: 0.05 + Math.random() * 0.1,
             filter: 'blur(20px)'
           }">
      </div>
    </div>
    
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-5 fade-in" ref="titleRef">
          <h2 class="display-4 fw-bold mb-3">Свяжитесь со мной</h2>
          <p class="lead text-text-secondary">
            Есть вопросы или предложения? Напишите мне!
          </p>
        </div>
        
        <div class="card-tech p-4 p-lg-5 fade-in" ref="formRef">
          <div class="row">
            <!-- Контактная информация -->
            <div class="col-md-5 mb-4 mb-md-0">
              <h4 class="text-accent-secondary mb-4">Мои контакты</h4>
              
              <div class="d-flex align-items-start mb-4">
                <div class="bg-accent-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                  <i class="bi bi-envelope fs-5 text-dark"></i>
                </div>
                <div class="ms-3">
                  <h6 class="mb-1">Email</h6>
                  <a href="mailto:your.email@example.com" class="text-text-secondary">your.email@example.com</a>
                </div>
              </div>
              
              <div class="d-flex align-items-start mb-4">
                <div class="bg-accent-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                  <i class="bi bi-telegram fs-5 text-dark"></i>
                </div>
                <div class="ms-3">
                  <h6 class="mb-1">Telegram</h6>
                  <a href="https://t.me/your_telegram" class="text-text-secondary">@your_telegram</a>
                </div>
              </div>
              
              <div class="d-flex align-items-start">
                <div class="bg-accent-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                  <i class="bi bi-github fs-5 text-dark"></i>
                </div>
                <div class="ms-3">
                  <h6 class="mb-1">GitHub</h6>
                  <a href="https://github.com/yourusername" class="text-text-secondary">github.com/yourusername</a>
                </div>
              </div>
              
              <div class="mt-5">
                <h5 class="text-accent-secondary mb-3">Я в соцсетях</h5>
                <div class="d-flex gap-3">
                  <a href="#" class="text-light fs-4"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="text-light fs-4"><i class="bi bi-twitter-x"></i></a>
                  <a href="#" class="text-light fs-4"><i class="bi bi-stack-overflow"></i></a>
                </div>
              </div>
            </div>
            
            <!-- Форма -->
            <div class="col-md-7">
              <h4 class="text-accent-secondary mb-4">Форма обратной связи</h4>
              
              <form @submit.prevent="submitForm" class="contact-form">
                <div class="mb-4">
                  <label class="form-label text-text-secondary">Ваше имя</label>
                  <div class="input-group">
                    <span class="input-group-text bg-dark border-secondary">
                      <i class="bi bi-person text-accent-primary"></i>
                    </span>
                    <input 
                      type="text" 
                      class="form-control bg-dark border-secondary text-light" 
                      placeholder="Иван Иванов"
                      v-model="form.name"
                      required
                    >
                  </div>
                </div>
                
                <div class="mb-4">
                  <label class="form-label text-text-secondary">Email</label>
                  <div class="input-group">
                    <span class="input-group-text bg-dark border-secondary">
                      <i class="bi bi-envelope text-accent-primary"></i>
                    </span>
                    <input 
                      type="email" 
                      class="form-control bg-dark border-secondary text-light" 
                      placeholder="email@example.com"
                      v-model="form.email"
                      required
                    >
                  </div>
                </div>
                
                <div class="mb-4">
                  <label class="form-label text-text-secondary">Сообщение</label>
                  <textarea 
                    class="form-control bg-dark border-secondary text-light" 
                    rows="4" 
                    placeholder="Расскажите о вашем проекте..."
                    v-model="form.message"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" class="btn btn-neon w-100 py-2 mt-2">
                  <span v-if="!isSubmitting">Отправить сообщение</span>
                  <span v-else>
                    <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                    Отправка...
                  </span>
                </button>
                
                <div v-if="submitStatus" class="mt-3 text-center">
                  <div v-if="submitStatus === 'success'" class="text-success">
                    <i class="bi bi-check-circle-fill me-2"></i> Сообщение успешно отправлено!
                  </div>
                  <div v-if="submitStatus === 'error'" class="text-danger">
                    <i class="bi bi-exclamation-circle-fill me-2"></i> Ошибка при отправке. Попробуйте снова.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success', 'error', null

// Refs для анимаций
const titleRef = ref(null)
const formRef = ref(null)

// Анимация появления
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })
  
  if (titleRef.value) observer.observe(titleRef.value)
  if (formRef.value) observer.observe(formRef.value)
})

// Отправка формы
const submitForm = () => {
  isSubmitting.value = true
  submitStatus.value = null
  
  // Здесь будет реальная отправка на сервер
  // Для демонстрации используем setTimeout
  setTimeout(() => {
    console.log('Форма отправлена:', form.value)
    isSubmitting.value = false
    submitStatus.value = 'success'
    
    // Очищаем форму через 3 секунды
    setTimeout(() => {
      form.value = { name: '', email: '', message: '' }
      submitStatus.value = null
    }, 3000)
  }, 1500)
}
</script>

<style scoped>
.contact-form .form-control {
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.contact-form .form-control:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 0.25rem rgba(3, 218, 197, 0.25);
  background-color: rgba(30, 30, 30, 0.8);
}

.input-group-text {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-right: none !important;
}

.input-group:focus-within .input-group-text {
  border-color: var(--accent-primary);
  background-color: rgba(3, 218, 197, 0.1);
}

.contact-form label {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: block;
}
</style>