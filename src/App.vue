<template>
  <div class="min-vh-100 d-flex flex-column">
    <NavBar />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>