<template>
  <section class="py-12 md:py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12 text-purple-900">Meus Projetos</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
          <img src="../assets/img1.png" alt="SwiftBuy" class="w-full h-48 object-cover object-center">

          <div class="p-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">SwiftBuy</h3>
            <p class="text-gray-600 text-sm mb-4">
              Um site moderno e responsivo, construído para uma disciplina de fábrica de projetos da minha graduação.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">HTML</span>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">CSS</span>
              <span class="bg-yellow-200 text-yellow-700 text-xs font-medium px-2.5 py-0.5 rounded">JavaScript</span>
              <span class="bg-blue-200 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">Tailwind</span>
              <span class="bg-purple-200 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded">Bootstrap</span>
            </div>
            <div class="flex justify-between items-center mt-4">
              <a href="https://github.com/maisamarall/SwiftBuy-" target="_blank" class="text-purple-900 hover:text-gray-700 underline font-medium flex items-center gap-1 transition-colors">
                Ver Projeto <i class="fas fa-external-link-alt text-xs"></i>
              </a>
              </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
          <img src="../assets/img2.png" alt="Valorese" class="w-full h-48 object-cover object-center">

          <div class="p-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">Valorese</h3>
            <p class="text-gray-600 text-sm mb-4">
              Um site responsivo, construído em grupo para uma disciplina de graduação.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">HTML</span>
              <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">CSS</span>
              <span class="bg-yellow-200 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">JavaScript</span>
            </div>
            <div class="flex justify-between items-center mt-4">
              <a href="https://github.com/valorease" target="_blank" class="text-purple-900 hover:text-gray-700 underline font-medium flex items-center gap-1 transition-colors">
                Ver Projeto <i class="fas fa-external-link-alt text-xs"></i>
              </a>
              </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
          <img src="../assets/img3.png" alt="Spotify" class="w-full h-48 object-cover object-center">
          <div class="p-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">Spotify</h3>
            <p class="text-gray-600 text-sm mb-4">
              Este projeto é um web simples, desenvolvida para a disciplina de Desenvolvimento Web.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">HTML</span>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">CSS</span>
              <span class="bg-yellow-200 text-yellow-700 text-xs font-medium px-2.5 py-0.5 rounded">JavaScript</span>
            </div>
            <div class="flex justify-between items-center mt-4">
              <a href="https://github.com/maisamarall/spotify-project" target="_blank" class="text-purple-900 hover:text-gray-700 underline font-medium flex items-center gap-1 transition-colors">
                Ver Projeto <i class="fas fa-external-link-alt text-xs"></i>
              </a>
              </div>
          </div>
        </div>
      </div>

      <section class="py-12 bg-white rounded-lg shadow-lg">
        <h3 class="text-3xl font-bold text-center mb-8 text-gray-800">Tecnologias:</h3>
        <p class="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Um das principais tecnologias que utilizo no momento.
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm w-32 h-32 justify-center">
            <img src="../assets/html.png" alt="HTML5" class="w-16 h-16 mb-2">
            <span class="text-sm font-semibold text-gray-700">HTML5</span>
          </div>
          <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm w-32 h-32 justify-center">
            <img src="../assets/css.png" alt="CSS3" class="w-16 h-16 mb-2">
            <span class="text-sm font-semibold text-gray-700">CSS3</span>
          </div>
          <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm w-32 h-32 justify-center">
            <img src="../assets/javaScript.png" alt="JavaScript" class="w-16 h-16 mb-2">
            <span class="text-sm font-semibold text-gray-700">JavaScript</span>
          </div>
          <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm w-32 h-32 justify-center">
            <img src="../assets/tailwind.webp" alt="Tailwind CSS" class="w-16 h-16 mb-2">
            <span class="text-sm font-semibold text-gray-700">Tailwind CSS</span>
          </div>
          <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm w-32 h-32 justify-center">
            <img src="../assets/bootstrap_logo.svg" alt="Bootstrap" class="w-16 h-16 mb-2">
            <span class="text-sm font-semibold text-gray-700">Bootstrap</span>
          </div>
          <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm w-32 h-32 justify-center">
            <img src="../assets/vue.js.png" alt="Vue.js" class="w-16 h-16 mb-2">
            <span class="text-sm font-semibold text-gray-700">Vue.js</span>
          </div>
          <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm w-32 h-32 justify-center">
            <img src="../assets/figma.png" alt="Figma" class="w-16 h-16 mb-2">
            <span class="text-sm font-semibold text-gray-700">Figma</span>
          </div>
          <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm w-32 h-32 justify-center">
            <img src="../assets/python.png" alt="Python" class="w-16 h-16 mb-2">
            <span class="text-sm font-semibold text-gray-700">Python</span>
          </div>
          </div>
      </section>

    </div>
  </section>
</template>
