import React, { Component } from "react";

export default class Collatz extends Component {
  numero = React.createRef();

  state = {
    descomposicion: [],
  };
  descomponer = (event) => {
    event.preventDefault();
    var array = [];
    array.push(parseInt(this.numero.current.value));
    while (array[array.length - 1] >= 1) {
      if (array[array.length - 1] % 2 == 0) {
        var nuevonumero = array[array.length - 1] / 2;
        array.push(nuevonumero);
      } else if (array[array.length - 1] != 1) {
        var nuevonumero = array[array.length - 1] * 3 + 1;
        array.push(nuevonumero);
      } else {
        this.setState({
          descomposicion: array,
        });
        break;
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <form onSubmit={this.descomponer}>
          <label htmlFor="numero">Escribe un numero: </label>
          <input name="numero" type="text" ref={this.numero} />
          <button>Descomponer</button>

          <ul>
            {this.state.descomposicion.map((valor, index) => {
              return <li key={index}>{valor}</li>;
            })}
          </ul>
        </form>
      </div>
    );
  }
}
