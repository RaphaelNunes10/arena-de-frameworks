<script>
    let usuarios = [
        'Rodrigo',
        'Maria',
        'José',
        'Raphael',
        'Ugo'
    ];
</script>

<h1>Lista Svelte</h1>
<ul>
    {#each usuarios as usuario}
        <li key={usuario}>{usuario}</li>
    {/each}
</ul>
<p>
    <a href="/vue-item-list">{"Ir para Lista Vue ->"}</a>
</p>
<p>
    <a href="/react-item-list">{"Ir para Lista React ->"}</a>
</p>
<p>
    <a href="/">{"Voltar <-"}</a>
</p>