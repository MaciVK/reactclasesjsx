import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  seleccionMultipleRef = React.createRef();
  state = {
    ingredientes: [
      "Sangre",
      "Arroz",
      "Piñones",
      "Tripas",
      "Higados",
      "Riñones",
    ],
    seleccionado: "",
  };

  generarOptions = () => {
    var options = [];
    this.state.ingredientes.map((ingrediente, i) => {
      options.push(
        <option key={i} value={ingrediente}>
          {ingrediente}
        </option>
      );
    });
    return options;
  };

  mostrarSeleccionados = (e) => {
    e.preventDefault();
    var datos = "";
    //Estamos usando REF.current.value SOLO CUANDO son selecciones simples
    //Ahora nos devuelve un array, para acceder a los options es:
    //REF.current.options
    //En dicho array, lo recorremos y preguntamos por los selecionados
    var options = this.seleccionMultipleRef.current.options;
    //Se recorren todos los options con EACH, FOR, FOR-OF, MAP...
    for (var i = 0; i < options.length; i++) {
      //Se pregunta con SELECTED por cada elemento seleccionado
      if (options[i].selected) {
        datos += options[i].value + ", ";
      }
    }
    this.setState({
      seleccionado: datos,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.mostrarSeleccionados}>
          <select
            name="selectMultiple"
            size="10"
            multiple
            ref={this.seleccionMultipleRef}
          >
            {this.generarOptions()}
          </select>
          <button>Mostrar Seleccionados</button>
        </form>
        <h1 style={{ color: "white", backgroundColor: "blueviolet" }}>
          {this.state.seleccionado}
        </h1>
      </div>
    );
  }
}
