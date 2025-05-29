<template>
  <div class="py-16 bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 max-w-3xl"> <h1 class="text-4xl font-extrabold text-center text-gray-800 mb-6">Entre em Contato</h1>
      <p class="text-xl text-center text-gray-600 mb-12">
        Estou sempre aberta a novas oportunidades, projetos interessantes e conexões.
      </p>

      <div class="bg-white rounded-lg shadow-xl p-8 mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Envie-me uma Mensagem</h2>

        <form action="#" method="POST" class="space-y-6">
          <div>
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nome Completo:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              placeholder="seu.email@exemplo.com"
            />
          </div>
          <div>
            <label for="subject" class="block text-gray-700 text-sm font-bold mb-2">Assunto:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              placeholder="Sobre o que é a mensagem?"
            />
          </div>
          <div>
            <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              placeholder="Escreva sua mensagem aqui..."
            ></textarea>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>

      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Ou mande no meu email</h2>
        <div class="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <a href="mailto:maisa.amaral@email.com" class="text-gray-700 hover:text-purple-900 transition duration-300 flex items-center text-lg">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.223V6h16zm0 12H4V8.337l8 6.224 8-6.224V18z"/></svg>
            maisaamaral220@email.com
          </a>
          </div>

        <div class="flex justify-center items-center gap-8 text-gray-700">
          <a href="https://www.linkedin.com/in/maisaamaral" target="_blank" class="hover:text-purple-900 transition duration-300">
            <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" class="w-8 h-8">
          </a>
          <a href="https://github.com/maisamarall" target="_blank" class="hover:text-purple-900 transition duration-300">
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" class="w-8 h-8">
          </a>
          <a href="https://instagram.com/maisamarall" target="_blank" class="hover:text-purple-900 transition duration-300">
            <img src="https://img.icons8.com/ios-filled/50/000000/instagram.png" alt="GitHub" class="w-8 h-8">
          </a>
          </div>
      </div>
    </div>
  </div>
</template>
