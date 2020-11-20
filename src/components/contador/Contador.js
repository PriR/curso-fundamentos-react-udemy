import React, { Component } from "react";
import "./Contador.css";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0, // se o valor n foi fornecido, o padrão será 0
    passo: this.props.passoInicial || 5,
  };

  // o BIND no contrutor o this realmente aponta para o this atual
  //   constructor(props) {
  //     super(props)
  //     this.inc = this.inc.bind(this);
  //   }
  // funciona, preferível assim que inicializar no contrutor, é mais simples
  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso, // o + converte para um valor inteiro
    });
  };

  // nao funciona pq n aponta para a versão mais atual do this. Funcionaria se no onClick passar uma arrow onClick={_ => this.inc()}
  //   inc() {
  //     this.setState({
  //       numero: this.state.numero + 1,
  //     });
  //   }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
      </div>
    );
  }
}

export default Contador;
