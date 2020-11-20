import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const DiretaPai = (props) => {
  // não funciona passar assim pq deve ser atualizado via state
  // let nome = "?";
  // let idade = 0;
  // let nerd = false;
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  // não funciona passar assim pq deve ser atualizado via state
  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
    console.log(nomeParam, idadeParam, nerdParam);
    // nome = nomeParam;
    // idade = idadeParam;
    // nerd = nerdParam;
    setNome(nomeParam);
    setIdade(idadeParam);
    setNerd(nerdParam);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade}</strong>
        </span>
        <span> {nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};

export default DiretaPai;
