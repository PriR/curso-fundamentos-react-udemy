import React from "react";

const IndiretaFilho = (props) => {
  const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button onClick={_ => props.quandoClicar("João", gerarIdade(), gerarNerd())}>
        Forecer Informações
      </button>
    </div>
  );
};

export default IndiretaFilho;
