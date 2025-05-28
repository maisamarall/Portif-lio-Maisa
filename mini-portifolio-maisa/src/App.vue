<script setup>
import { onMounted } from 'vue'
import FooterComponent from './components/FooterComponent.vue'
import NavComponent from './components/NavComponent.vue' 

onMounted(() => {
  console.log('App montado com sucesso')
})
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <header>
      <NavComponent /> </header>

    <main class="flex-1 container mx-auto px-4 py-6">
      <router-view />
    </main>

    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>
