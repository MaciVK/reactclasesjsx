import React, { Component } from "react";

export default class SeleccionSimple extends Component {
  seleccionado = React.createRef();
  state = {
    filas: [],
    opciones: [],
  };
  generarOptions = () => {
    var options = [];

    for (var i = 1; i <= 10; i++) {
      var random = Math.round(Math.random() * 55 + 1);
      options.push(
        <option key={i} value={random}>
          {" "}
          {random}{" "}
        </option>
      );
    }
    this.setState({
      opciones: options,
    });
  };

  //Hacemos un metodo de carga de option UNA VEZ, a traves del ciclo de vida de REACT
  componentWillMount = () => {
    this.generarOptions();
  };

  tablaMultiplicar = (event) => {
    event.preventDefault();
    var numero = parseInt(this.seleccionado.current.value);
    var datos = [];
    for (var i = 1; i <= 10; i++) {
      var operacion = numero * i;
      datos.push(
        <tr key={i}>
          <td>{numero + " * " + i}</td>
          <td>{operacion}</td>
        </tr>
      );
    }
    this.setState({ filas: datos });
  };

  render() {
    return (
      <div>
        <h1>Seleccion de elementos</h1>
        <form onSubmit={this.tablaMultiplicar}>
          <select name="selectNumeros" ref={this.seleccionado}>
            {this.state.opciones}
          </select>
          <button>Generar Tabla</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>OPERACION</th>
              <th>RESULTADO</th>
            </tr>
          </thead>
          <tbody>{this.state.filas}</tbody>
        </table>
      </div>
    );
  }
}
