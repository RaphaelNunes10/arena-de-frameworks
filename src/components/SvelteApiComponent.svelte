<script>
    import { onMount } from "svelte";

    let usuarios = [];

    const buscarUsuarios = async () => {
        try {
            const { users: usuariosEncontrados } = await fetch('https://dummyjson.com/users').then(res => res.json());
            usuarios = usuariosEncontrados;
        } catch (error) {
            console.error(error);
        }
    }

    onMount(() => {
        buscarUsuarios();
    });
</script>

<h1>API Svelte</h1>
<ul>
    {#each usuarios as usuario (usuario.id)}
        <li>{usuario.firstName}</li>
    {/each}
</ul>
<p>
    <a href="/vue-api">{"Ir para API Vue ->"}</a>
</p>
<p>
    <a href="/vue-api">{"Ir para API React ->"}</a>
</p>
<p>
    <a href="/">{"Voltar <-"}</a>
</p>