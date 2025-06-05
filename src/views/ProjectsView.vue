<template>
  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">Мои проекты</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="proj in projects" :key="proj.id" class="col d-flex">
          <ProjectCard :project="proj" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { allProjects } from '@/data/projectData'

const projects = ref(allProjects)
</script>
