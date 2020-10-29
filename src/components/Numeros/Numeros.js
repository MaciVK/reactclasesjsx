import React, { Component } from "react";
import Numero from "./Numero";

class Numeros extends Component {
  state = {
    numeros: [321, 465, 21, 465, 4, 48, 5, 21],
    sumaTotal: 0,
  };

  sumarNumeros = (numero) => {
    this.setState({
      sumaTotal: this.state.sumaTotal + numero,
    });
  };

  crearNumero = () => {
    var arrayNumeros = this.state.numeros;
    arrayNumeros.push(Math.random() * 100 + 1);
    this.setState({
      numeros: arrayNumeros,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.crearNumero}>Crear Numero</button>
        <ul>
          {this.state.numeros.map((numero, index) => {
            return (
              <Numero
                key={index}
                numero={parseInt(numero)}
                funcionSumar={this.sumarNumeros}
              />
            );
          })}
        </ul>
        <h2>Suma total:{this.state.sumaTotal}</h2>
      </div>
    );
  }
}

export default Numeros;
