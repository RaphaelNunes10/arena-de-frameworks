<script>
    console.log("Componente inicializado!");

    console.log("Componente atualizado!"); // Svelte atualiza o componente apenas uma vez

    //---

    let contagem = 0;
    let prevContagem = contagem;

    function incrementarContagem() {
        contagem++;
        console.log(`Número atual: ${contagem}`)
    };

    $: if (contagem !== prevContagem) {
        console.log(`Dobro do número atual: ${contagem * 2}`);
        prevContagem = contagem;
    }
</script>

<h1>Contagem Svelte</h1>
<h2>Número atual: {contagem}</h2>
<button on:click={incrementarContagem}>Contar</button>
<p>
    <a href="/vue-count">{"Ir para Contagem Vue ->"}</a>
</p>
<p>
    <a href="/react-count">{"Ir para Contagem React ->"}</a>
</p>
<p>
    <a href="/">{"Voltar <-"}</a>
</p>