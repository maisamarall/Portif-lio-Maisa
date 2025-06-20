<template>
  <div>
    <section id="hero" class="bg-gray-100 text-gray-900 min-h-screen flex items-center justify-center pt-24 pb-12
                              dark:bg-gray-950 dark:text-gray-100 transition-colors duration-500">
      <div class="container mx-auto text-center px-4">
        <img src="../assets/logoo.jpeg" alt="Sua Foto"
          class="rounded-full w-48 h-48 mx-auto mb-6 border-4 border-purple-300 shadow-lg object-cover">

        <h1 id="typing" class="text-5xl md:text-6xl font-extrabold leading-tight mb-2 text-gray-900 dark:text-gray-100">
        </h1>
        <p id="subtext" class="text-xl md:text-2xl mb-8 opacity-0 transition-opacity duration-700
                                dark:text-gray-300">
          Desenvolvedora Web | Design UX & UI
        </p>

        <router-link to="/projetos" class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105dark:bg-purple-700 dark:hover:bg-purple-600 dark:text-white">
          Ver Meus Projetos
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    const element = document.getElementById("typing");
    const subtextElement = document.getElementById("subtext");

    // A classe dark:text-purple-400 no <html> (ou body) já cuida da cor do texto principal
    // A cor dentro do span precisa ser ajustada também.
    // Usaremos uma cor que funcione bem em ambos os modos ou manipularemos com JS.
    // Para simplificar e fazer com que o dark mode do Tailwind funcione, vamos modificar o HTML que é injetado.
    const lightModeText = 'Olá, eu sou a <span class="text-purple-900">Maisa Amaral</span>';
    const darkModeText = 'Olá, eu sou a <span class=" hover:text-purple-300">Maisa Amaral</span>'; // Roxo mais claro para o dark mode

    let index = 0; // Começa do zero para o typing effect

    // Função para verificar o tema atual e obter o texto correto
    const getTypeText = () => {
      // Verifica se o <html> tem a classe 'dark'
      if (document.documentElement.classList.contains('dark')) {
        return darkModeText;
      }
      return lightModeText;
    };

    let currentText = getTypeText(); // Define o texto inicial baseado no tema

    const type = () => {
      element.innerHTML = currentText.substring(0, index);
      if (index < currentText.length) {
        index++;
        setTimeout(type, 20); // Velocidade aumentada
      } else {
        setTimeout(() => {
          subtextElement.classList.remove("opacity-0");
        }, 300);
      }
    };

    // Reseta o typing effect e inicia-o novamente se o tema mudar
    const handleThemeChange = () => {
      index = 0; // Reinicia o índice
      subtextElement.classList.add("opacity-0"); // Esconde o subtexto para re-animar
      currentText = getTypeText(); // Atualiza o texto para o novo tema
      type(); // Reinicia o efeito de digitação
    };

    // Adiciona um listener para mudanças na classe 'dark' no <html>
    // Isso é útil se o usuário clicar no botão de tema enquanto estiver na Home.
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          // Se a classe 'dark' foi adicionada/removida, handleThemeChange
          if ((document.documentElement.classList.contains('dark') && currentText === lightModeText) ||
            (!document.documentElement.classList.contains('dark') && currentText === darkModeText)) {
            handleThemeChange();
          }
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Inicia o efeito de digitação quando o componente é montado
    type();
  },
};
</script>

<style scoped>
/* Opcional: para garantir que o efeito de digitação funcione bem com as transições de cor */
#typing span {
  transition: color 0.5s ease-in-out;
}
</style>