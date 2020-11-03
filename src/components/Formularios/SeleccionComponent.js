import React, { Component } from "react";
import Select from "react-select";

export default class SeleccionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientes: [
        "Sangre",
        "Arroz",
        "Piñones",
        "Tripas",
        "Higados",
        "Riñones",
      ],
      opciones: null,
      selectedOption: null,
      opcionesSeleccionadas: null,
    };
  }
  componentWillMount = () => {
    this.generarOptions();
  };

  generarOptions = () => {
    var datos = [];
    this.state.ingredientes.map((ingrediente, i) => {
      datos.push({ value: ingrediente, label: ingrediente });
    });
    this.setState({
      opciones: datos,
    });
  };

  mostrarSeleccionado = (seleccionado) => {
    this.setState({
      selectedOption: seleccionado,
      seleccionados: seleccionado.value,
    });
  };
  mostrarSeleccionados = (seleccionados) => {};
  render() {
    return (
      <div>
        <h1>Select como componente externo</h1>
        {/* <Select
          value={this.state.selectedOption}
          options={this.state.opciones}
          onChange={this.mostrarSeleccionado}
        /> */}
        <Select
          value={this.state.opcionesSeleccionadas}
          options={this.state.opciones}
          onChange={this.mostrarSeleccionados}
          isMulti
        />
        <h2 style={{ backgroundColor: "violet", color: "white" }}>
          {this.state.seleccionados}
        </h2>
      </div>
    );
  }
}
