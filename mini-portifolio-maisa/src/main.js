import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa a instância do router

const app = createApp(App) // Cria a aplicação Vue

app.use(router) // Adiciona o router à aplicação

app.mount('#app') // MONTA A APLICAÇÃO AQUI, E SOMENTE AQUI