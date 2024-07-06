import { useRef, useEffect, useState } from "react";

export default function Contagem() {
    useEffect(() => {
      console.log("Componente inicializado!");
    }, []);

    console.log("Componente atualizado!"); // React atualiza o componente diversas vezes

    //---

    const primeiraRenderizacao = useRef(true);
    const [contagem, setcontagem] = useState(0);

    function incrementarcontagem() {
      setcontagem(prevContagem => {
        const newContagem = prevContagem + 1;
        console.log(`Número atual: ${newContagem}`);
        return newContagem;
      });
    };

    useEffect(() => {
      if (primeiraRenderizacao.current) {
          primeiraRenderizacao.current = false;
      } else {
          console.log(`Dobro do número atual: ${contagem * 2}`);
      }
    }, [contagem]);

    return (
      <>
        <h1>Contagem React</h1>
        <h2>Número atual: {contagem}</h2>
        <button onClick={incrementarcontagem}>Contar</button>
        <p>
          <a href="/vue-count">{"Ir para Contagem Vue ->"}</a>
        </p>
        <p>
          <a href="/">{"Voltar <-"}</a>
        </p>
      </>
    )
  }