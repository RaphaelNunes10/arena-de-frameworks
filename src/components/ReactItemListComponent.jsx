const usuarios = [
    'Rodrigo',
    'Maria',
    'José',
    'Raphael',
    'Ugo'
];
  
export default function Lista() {
    return (
        <>
            <h1>Lista React</h1>
            <ul>
                {usuarios.map(usuario => <li key={usuario}>{usuario}</li>)}
            </ul>
            <p>
                <a href="/vue-item-list">{"Ir para Lista Vue ->"}</a>
            </p>
            <p>
                <a href="/svelte-item-list">{"Ir para Lista Svelte ->"}</a>
            </p>
            <p>
                <a href="/">{"Voltar <-"}</a>
            </p>
        </>
    )
}