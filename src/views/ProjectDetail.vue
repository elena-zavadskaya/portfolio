<template>
  <section class="py-5">
    <div class="container">
      <template v-if="project">
        <div class="row">
          <!-- Основной контент -->
          <div class="col-lg-8">
            <ProjectHeader :project="project" />
            <ProjectInfoBlock :project="project" />
            <ProjectFeatures :projectId="project.id" />
            <ProjectTechnologies :projectId="project.id" />
          </div>

          <!-- Боковая панель -->
          <div class="col-lg-4">
            <ProjectSidebar :project="project" />
          </div>
        </div>
      </template>

      <template v-else>
        <div class="alert alert-danger">
          Проект с ID {{ projectId }} не найден.
          <router-link to="/projects" class="alert-link"> Вернуться к списку проектов </router-link>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { allProjects } from '@/data/projectData'

import ProjectHeader from '@/components/project/ProjectHeader.vue'
import ProjectInfoBlock from '@/components/project/ProjectInfoBlock.vue'
import ProjectFeatures from '@/components/project/ProjectFeatures.vue'
import ProjectTechnologies from '@/components/project/ProjectTechnologies.vue'
import ProjectSidebar from '@/components/project/ProjectSidebar.vue'

const route = useRoute()
const projectId = ref(Number(route.params.id))
const project = ref(null)

// Найти проект
project.value = allProjects.find((p) => p.id === projectId.value)

// Следить за изменениями маршрута
watch(
  () => route.params.id,
  (newId) => {
    projectId.value = Number(newId)
    project.value = allProjects.find((p) => p.id === projectId.value)
  },
)
</script>

<style scoped>
/* Общие стили */
.alert {
  background-color: #2c0b0e;
  border-color: #842029;
  color: #ea868f;
}

.alert-link {
  color: #ff99a1;
  text-decoration: underline;
}

.alert-link:hover {
  color: #ffccd0;
}

.badge {
  transition: all 0.3s ease;
}

.badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-color: var(--accent-primary);
}
</style>
