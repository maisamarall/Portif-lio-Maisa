<template>
  <nav class="bg-white shadow-lg p-6 fixed w-full z-10 top-0">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-purple-900 hover:text-purple-700 transition duration-300">
        Maisa Amaral
      </router-link>

      <div class="space-x-8 hidden md:flex">
        <router-link to="/" class="text-gray-600 hover:text-purple-900 transition duration-300">Inicio</router-link>
        <router-link to="/about" class="text-gray-600 hover:text-purple-900 transition duration-300">Sobre</router-link>
        <router-link to="/projetos" class="text-gray-600 hover:text-purple-900 transition duration-300">Projetos</router-link>
        <router-link to="/contact" class="text-gray-600 hover:text-purple-900 transition duration-300">Contato</router-link>
      </div>

      <button class="md:hidden focus:outline-none">
        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </nav>
</template>

