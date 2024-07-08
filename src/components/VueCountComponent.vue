<script setup>
import { ref, watch } from 'vue';

console.log("Componente inicializado!");

console.log("Componente atualizado!"); // Vue atualiza o componente apenas uma vez

//---

const contagem = ref(0);

function incrementarContagem() {
  contagem.value++;
  console.log(`Número atual: ${contagem.value}`)
};

watch(contagem, (newContagem) => {
  console.log(`Dobro do número atual: ${newContagem * 2}`)
});
</script>

<template>
  <h1>Contagem Vue</h1>
  <h2>Número atual: {{contagem}}</h2>
  <button @click="incrementarContagem">Contar</button>
  <p>
    <a href="/react-count">Ir para Contagem React -></a>
  </p>
  <p>
    <a href="/svelte-count">Ir para Contagem Svelte -></a>
  </p>
  <p>
    <a href="/">Voltar <-</a>
  </p>
</template>