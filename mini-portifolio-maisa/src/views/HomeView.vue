<template>
  <div>
    <section id="hero" class="bg-gray-100 text-gray-900 min-h-screen flex items-center justify-center pt-24 pb-12">
      <div class="container mx-auto text-center px-4">
        <img src="../assets/logo (2).jpeg" alt="Sua Foto" class="rounded-full w-48 h-48 mx-auto mb-6 border-4 border-purple-300 shadow-lg object-cover"> 
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Olá, eu sou a <span class="text-purple-900">Maisa Amaral</span>!
        </h1>
        <p class="text-xl md:text-2xl mb-8">
          Desenvolvedora Web | Design UX/UI
        </p>
        <router-link to="/projetos" class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105">
          Ver Meus Projetos
        </router-link>
      </div>
    </section>
  </div>
</template>

