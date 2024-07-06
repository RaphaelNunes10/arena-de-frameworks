<script setup>
const usuarios = [
    'Rodrigo',
    'Maria',
    'José',
    'Raphael',
    'Ugo'
];
</script>

<template>
    <h1>Lista Vue</h1>
    <ul>
        <li v-for="usuario in usuarios" :key="usuario">{{ usuario }}</li>
    </ul>
    <p>
        <a href="/react-item-list">Ir para Lista React -></a>
    </p>
    <p>
        <a href="/">Voltar <-</a>
    </p>
</template>