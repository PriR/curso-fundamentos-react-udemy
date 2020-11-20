// qtd de numero a serem gerados, retornar array de 1 a 60, n pode ter repeticao dos numeros
// input com qtos numeros
// botao com gerar
// se ja ta no array n pode entrar no array novamente
// criar um componente chamado Mega dentro de pasta chamado mega
// numero gerado, input, botao de gerar

import React, { useState } from "react";
import Botao from "./Botao";
import Display from "./Display";
import Input from "./Input";
import "./Mega.css";

const Mega = (props) => {
  const gerarNumeroNaoContigo = (min, max, arrayNumeros) => {
    const numeroAAdicionar = parseInt(Math.random() * (max + 1 - min)) + min;
    return arrayNumeros.includes(numeroAAdicionar)
      ? gerarNumeroNaoContigo(min, max, arrayNumeros)
      : numeroAAdicionar;
  };

  const gerarNumeros = (qtde) => {
    const numeros = Array(qtde)
      .fill(props.quantidade || 6)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContigo(1, 60, nums);
        console.log([...nums, novoNumero]);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numeros;
  };

  const [quantidade, setQuantidade] = useState(props.quantidade || 6);
  const numerosIniciais = gerarNumeros(quantidade);
  const [numerosGerados, setNumerosGerados] = useState(numerosIniciais);

  const inputChange = (quantidadeInputada) => {
    setQuantidade(quantidadeInputada);
    setNumerosGerados(gerarNumeros(quantidadeInputada));
  };

  return (
    <div className="Mega">
      <Display numeros={numerosGerados} />
      <Input quantidade={quantidade} onChangeInput={inputChange} />
      <Botao gerar={(_) => setNumerosGerados(gerarNumeros(quantidade))} />
    </div>
  );
};

export default Mega;
