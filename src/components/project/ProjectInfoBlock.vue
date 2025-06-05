<template>
  <div>
    <!-- Информация о курсе -->
    <div v-if="project.id === 1 || project.id === 2" class="course-info mb-4">
      <p>
        Проект разработан в рамках курса
        <a
          href="https://practicum.yandex.ru/android-developer/?from=catalog"
          target="_blank"
          rel="noopener noreferrer"
          class="text-accent-primary"
        >
          Android-разработчик от Яндекс.Практикума
        </a>
      </p>
    </div>

    <!-- Информация о дипломной работе -->
    <div v-if="project.id === 4" class="diploma-info mb-4">
      <p>
        Проект выполнен в качестве дипломной работы в университете. Разрабатывался в команде с
        другими студентами.
      </p>
    </div>

    <!-- Информация о команде -->
    <div v-if="project.id === 2 || project.id === 3 || project.id === 4" class="team-info mb-4">
      <p>
        <template v-if="project.id === 2">
          Приложение выполнено в команде с другими студентами в качестве дипломного проекта. Мы
          работали в формате итераций, проводили код-ревью и использовали доску задач для управления
          процессами.
        </template>

        <template v-if="project.id === 3">
          Этот сайт разработан полностью самостоятельно в качестве коммерческого проекта для
          дизайн-бюро "E.S.S.E. Design & Decoration". В процессе разработки я тесно
          взаимодействовала с заказчиком, собирала требования и вносила правки.
        </template>

        <template v-if="project.id === 4">
          Проект разработан в рамках учебного задания для университета по предмету веб-разработка.
          Работа выполнялась в команде и включает фронтенд (Vue.js + Vite) и бэкенд (Django) части.
          Я отвечала за разработку бэкенда и реализацию трех тестов.
        </template>

        <template v-if="project.id === 5">
          Командная работа включала распределение задач по разработке веб-интерфейса для
          преподавателей, создание Telegram-бота для студентов и проектирование базы данных. Мы
          использовали Agile-методологию с еженедельными встречами.
        </template>
      </p>
    </div>

    <!-- Ссылка на работающий сайт -->
    <div v-if="project.id === 4" class="live-link mb-4">
      <p>
        Работающий сайт доступен по адресу:
        <a
          href="https://svetasy.pythonanywhere.com/Login"
          target="_blank"
          rel="noopener noreferrer"
          class="text-accent-primary"
        >
          https://svetasy.pythonanywhere.com/Login
        </a>
      </p>
    </div>

    <!-- Информация о 3D-проектах -->
    <div v-if="project.id === 5 || project.id === 6" class="university-project-info mb-4">
      <p>
        <template v-if="project.id === 5">
          Это финальная работа по предмету "3D-моделирование" в университете. Работа выполнена
          индивидуально. Для создания модели использовались текстуры, а также была применена
          анимация для имитации накрывания корзины тканью.
        </template>

        <template v-if="project.id === 6">
          Это учебное задание по предмету "3D-моделирование" в университете. Работа выполнена
          индивидуально. Особое внимание уделено созданию реалистичного эффекта воды вокруг домика с
          использованием продвинутых техник моделирования и рендеринга.
        </template>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.course-info,
.diploma-info,
.team-info,
.live-link,
.university-project-info {
  background: rgba(255, 255, 255, 0.05);
  border-left: 3px solid var(--accent-primary);
  padding: 1rem 1.5rem;
  border-radius: 0 8px 8px 0;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.course-info:hover,
.diploma-info:hover,
.team-info:hover,
.live-link:hover,
.university-project-info:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(5px);
}

.text-accent-primary {
  color: var(--accent-primary);
  transition: color 0.3s ease;
}

.text-accent-primary:hover {
  color: var(--accent-secondary);
  text-decoration: underline;
}
</style>
