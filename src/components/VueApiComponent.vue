<script setup>
import { ref, onMounted } from 'vue';

const usuarios = ref([]);

onMounted(async () => {
    try {
        const { users: usuariosEncontrados } = await fetch('https://dummyjson.com/users').then(res => res.json());
        usuarios.value = usuariosEncontrados;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <h1>API Vue</h1>
    <ul>
        <li v-for="usuario in usuarios" :key="usuario.id">{{ usuario.firstName }}</li>
    </ul>
    <p>
        <a href="/react-api">Ir para API React -></a>
    </p>
    <p>
        <a href="/svelte-api">Ir para API Svelte -></a>
    </p>
    <p>
        <a href="/">Voltar <-</a>
    </p>
</template>