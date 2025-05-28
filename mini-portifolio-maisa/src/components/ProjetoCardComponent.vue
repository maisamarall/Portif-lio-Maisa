<template>
  <div class="py-16 bg-gray-100 min-h-screen"> <div class="container mx-auto px-4">
      <h1 class="text-4xl font-extrabold text-center text-gray-800 mb-12">Meus Projetos</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjetoCardComponent
          v-for="projeto in projetos"
          :key="projeto.id"
          :nomeDoProjeto="projeto.nome"
          :descricaoDoProjeto="projeto.descricao"
          :linkDoProjeto="projeto.link"
          :imagemDoProjeto="projeto.imagem"
        />
        </div>
    </div>
  </div>
</template>

