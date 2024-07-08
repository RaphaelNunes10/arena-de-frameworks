import { useState, useEffect } from "react";

export default function Api() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const buscarUsuarios = async () => {
            try {
                const { users: usuariosEncontrados } = await fetch('https://dummyjson.com/users').then(res => res.json());
                setUsuarios(usuariosEncontrados);
            } catch (error) {
                console.error(error);
            }
        }

        buscarUsuarios();
    }, []);

    return (
        <>
            <h1>API React</h1>
            <ul>
                {usuarios.map(usuario => <li key={usuario.id}>{usuario.firstName}</li>)}
            </ul>
            <p>
                <a href="/vue-api">{"Ir para API Vue ->"}</a>
            </p>
            <p>
                <a href="/svelte-api">{"Ir para API Svelte ->"}</a>
            </p>
            <p>
                <a href="/">{"Voltar <-"}</a>
            </p>
        </>
    )
}