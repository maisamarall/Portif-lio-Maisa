<template>
  <div class="py-16 pt-32 bg-gray-100 min-h-screen dark:bg-gray-900 transition-colors duration-500"> <div class="container mx-auto px-5 max-w-5xl">
      <h1 class="text-3xl font-bold text-center mb-12 text-purple-900 dark:text-purple-400">Sobre Mim</h1>

      <section class="bg-white rounded-lg shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center md:items-start gap-8
                         dark:bg-gray-800 dark:shadow-purple-500/20 transition-colors duration-500">
        <div class="md:w-1/3 flex-shrink-0">
          <img src="../assets/logoo.jpeg" alt="MINHA IMAGEM"
            class="rounded-full w-25 h-25 mx-auto md:mx-0 border-4 border-purple-300 shadow-lg object-cover">
        </div>
        <div class="md:w-2/3 text-center md:text-left">
          <h2 class="text-3xl font-bold text-purple-900 mb-4 dark:text-purple-400">Olá! Eu sou a Maisa.</h2>

          <p class="text-lg text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
            Sou uma Estudante de ADS e Desenvolvedora Web e Designer UX|UI, atualmente com 19 anos adoro criar
            interfaces intuitivas, belas e funcionais.
            Minha jornada no mundo web começou com a fascinação por como as experiências digitais moldam o dia a dia das
            pessoas, e desde então,
            busco transformar ideias complexas em soluções web acessíveis e impactantes.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
            Com uma sólida base em Vue.js, Tailwind CSS e JavaScript, eu me dedico a construir aplicações web intuitivas
            responsivas.
            Se você busca uma presença online forte, eu me especializo na criação de landing pages de alta conversão,
            pensadas para atrair e engajar seu público-alvo.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
            No lado do design, utilizo ferramentas como Figma para prototipagem e pesquisa de usuário, garantindo que o
            site/produto final não apenas pareça bom,
            mas também resolva problemas reais das pessoas. Minha expertise em UX/UI também me permite otimizar a
            experiência do usuário em qualquer projeto, desde a concepção até a implementação.
          </p>
        </div>
      </section>

      <div class="flex flex-col md:flex-row gap-8 mb-12">
        <section class="bg-white rounded-lg shadow-xl p-8 md:w-1/2
                         dark:bg-gray-800 dark:shadow-purple-500/20 transition-colors duration-500">
          <h2 class="text-3xl font-bold text-gray-800 text-center mb-6 dark:text-white">Minhas Habilidades</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-2xl font-semibold text-purple-800 mb-4 dark:text-purple-400"> Front-end</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Vue.js</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">JavaScript (ES6+)</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">HTML E CSS</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Tailwind CSS</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Git & GitHub</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Python</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Bootstrap</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Consumo de APIs</span>
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-purple-800 mb-10 dark:text-purple-400">Design UX/UI</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Figma</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Pesquisa de Usuario</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Wireframing & Prototipagem</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Testes de Usabilidade</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Jornadas do Usuário</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-purple-700 dark:text-purple-100 transform transition-transform duration-300 hover:scale-105">Acessibilidade</span>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white rounded-lg shadow-xl p-8 md:w-1/2 text-center
                         dark:bg-gray-800 dark:shadow-purple-500/20 transition-colors duration-500">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 dark:text-white">Minha Abordagem</h2>
          <div class="space-y-4">
            <div class="p-4">
              <h3 class="text-xl font-semibold text-purple-800 mb-2 dark:text-purple-400">Foco no Usuário</h3>
              <p class="text-gray-700 dark:text-gray-300">Desenvolvimento web, priorizando a experiência e as
                necessidades de quem irá utilizar o site.</p>
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold text-purple-800 mb-2 dark:text-purple-400">Aprendizado Contínuo</h3>
              <p class="text-gray-700 dark:text-gray-300">Sempre em busca de novas tecnologias e melhores práticas para
                entregar soluções modernas e eficientes.</p>
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold text-purple-800 mb-2 dark:text-purple-400">Colaboração Transparente</h3>
              <p class="text-gray-700 dark:text-gray-300">Acredito que os melhores resultados vêm do trabalho em equipe
                e da comunicação aberta.</p>
            </div>
          </div>
        </section>
      </div>

      <section class="bg-white rounded-lg shadow-xl p-8 mb-12
                         dark:bg-gray-800 dark:shadow-purple-500/20 transition-colors duration-500">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-6 dark:text-white">Minha Formação</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-purple-800 dark:text-purple-400">Análise e Desenvolvimento de Sistemas
            </h3>
            <p class="text-gray-700 text-lg dark:text-gray-300">Faculdade UNIMAR - 2024 - Atualmente (Previsão de
              Conclusão: 2026)</p>
            <p class="text-gray-600 text-base mt-1 dark:text-gray-400">Foco em desenvolvimento de software, estruturas
              de dados e bancos de dados etc.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-purple-800 dark:text-purple-400">Certificação em UX/UI Design</h3>
            <p class="text-gray-700 text-lg dark:text-gray-300">Unimar - 2024</p>
            <p class="text-gray-600 text-base mt-1 dark:text-gray-400">Conceitos e prática em pesquisa de usuário,
              wireframing, prototipagem e testes de usabilidade.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-purple-800 dark:text-purple-400">Imersão de Desenvolvimento Front-end
            </h3>
            <p class="text-gray-700 text-lg dark:text-gray-300">Alura - 2025</p>
            <p class="text-gray-600 text-base mt-1 dark:text-gray-400">Imersão em JavaScript, HTML, CSS.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-purple-800 dark:text-purple-400">MINICURSO: INTRODUÇÃO AO
              DESENVOLVIMENTO WEB COM PHP</h3>
            <p class="text-gray-700 text-lg dark:text-gray-300">Unimar - 2025</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-purple-800 dark:text-purple-400">Certificação Explorando JavaScript no
              Desenvolvimento web.</h3>
            <p class="text-gray-700 text-lg dark:text-gray-300">Unimar - 2025</p>
            <p class="text-gray-600 text-base mt-1 dark:text-gray-400">Conceitos e prática em pesquisa de usuário,
              wireframing, prototipagem e testes de usabilidade.</p>
          </div>
        </div>
      </section>

      <div class="text-center mt-12">
        <router-link to="/contact" class="bg-purple-900 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105
                                     dark:bg-purple-700 dark:hover:bg-purple-600 dark:text-white">
          Entre em Contato
        </router-link>
      </div>

    </div>
  </div>
</template>