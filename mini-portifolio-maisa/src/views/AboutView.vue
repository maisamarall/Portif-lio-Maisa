<template>
  <div class="py-16 bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 max-w-5xl">
      <h1 class="text-4xl md:text-5xl text-purple-900 text-center text-gray-800 mb-12">Sobre Mim</h1>

      <section class="bg-white rounded-lg shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div class="md:w-1/3 flex-shrink-0">
          <img src="../assets/logo.jpeg" alt="MINHA IMAGEM" class="rounded-full w-48 h-48 mx-auto md:mx-0 border-4 border-purple-300 shadow-lg object-cover">
        </div>
        <div class="md:w-2/3 text-center md:text-left">
          <h2 class="text-3xl font-bold text-purple-900 mb-4">Olá! Eu sou a Maisa.</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            Sou uma Estudante de ADS e Desenvolvedora Front-end e Designer UX/UI adoro criar interfaces intuitivas, belas e funcionais.
            Minha jornada no mundo web começou com a fascinação por como as experiências digitais moldam o dia a dia das pessoas, e desde então,
            busco transformar ideias complexas em soluções web acessíveis e impactantes.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Com uma sólida base em Vue.js, Tailwind CSS e JavaScript, eu me dedico a construir aplicações web intuitivas responsivas.
            No lado do design, utilizo ferramentas como Figma para prototipagem e pesquisa de usuário, garantindo que o site/produto final não apenas pareça bom,
            mas também resolva problemas reais das pessoas.
          </p>
        </div>
      </section>

      <div class="flex flex-col md:flex-row gap-8 mb-12">
        <section class="bg-white rounded-lg shadow-xl p-8 md:w-1/2">
          <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Minhas Habilidades</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-2xl font-semibold text-purple-800 mb-4">Desenvolvimento Front-end</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Vue.js</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">JavaScript (ES6+)</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">HTML5 & CSS3</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Tailwind CSS</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Python</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Git & GitHub</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Bootstrap</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Consumo de APIs</span>
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-purple-800 mb-4">Design UX/UI</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Figma</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Pesquisa de Usuário</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Wireframing & Prototipagem</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Testes de Usabilidade</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Jornadas do Usuário</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Acessibilidade</span>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white rounded-lg shadow-xl p-8 md:w-1/2 text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Minha Abordagem</h2>
          <div class="space-y-4">
            <div class="p-4">
              <h3 class="text-xl font-semibold text-purple-800 mb-2">Foco no Usuário</h3>
              <p class="text-gray-700">Desenvolvimento web, priorizando a experiência e as necessidades de quem irá utilizar o site.</p>
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold text-purple-800 mb-2">Aprendizado Contínuo</h3>
              <p class="text-gray-700">Sempre em busca de novas tecnologias e melhores práticas para entregar soluções modernas e eficientes.</p>
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold text-purple-800 mb-2">Colaboração Transparente</h3>
              <p class="text-gray-700">Acredito que os melhores resultados vêm do trabalho em equipe e da comunicação aberta.</p>
            </div>
          </div>
        </section>
      </div>

      <section class="bg-white rounded-lg shadow-xl p-8 mb-12">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Minha Formação</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-purple-800">Análise e Desenvolvimento de Sistemas</h3>
            <p class="text-gray-700 text-lg">Faculdade UNIMAR - 2024 - Atualmente (Previsão de Conclusão: 2026)</p>
            <p class="text-gray-600 text-base mt-1">Foco em desenvolvimento de software, estruturas de dados e bancos de dados etc.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-purple-800">Imersão de Desenvolvimento Front-end</h3>
            <p class="text-gray-700 text-lg">Alura - 2025</p>
            <p class="text-gray-600 text-base mt-1">Imersão em JavaScript, HTML, CSS.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-purple-800">Certificação em UX/UI Design</h3>
            <p class="text-gray-700 text-lg">Unimar - 2024</p>
            <p class="text-gray-600 text-base mt-1">Conceitos e prática em pesquisa de usuário, wireframing, prototipagem e testes de usabilidade.</p>
          </div>
        </div>
      </section>

      <div class="text-center mt-12">
        <router-link to="/contact" class="bg-purple-900 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105">
          Entre em Contato
        </router-link>
      </div>

    </div>
  </div>
</template>