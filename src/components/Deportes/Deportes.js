import React, { Component } from "react";
import Deporte from "./Deporte";
class Deportes extends Component {
  //Este metodo lo ejecuta el Hijo llamando al Parent, y le manda el deporte->

  seleccionarFavorito = (deporteFavorito) => {
    console.log("Favorito: " + deporteFavorito);
    this.setState({
      seleccionado: deporteFavorito,
    });
  };

  //Habrá un estado con un array de Deportes:
  state = {
    deportes: ["Volleyball", "Judo", "Tennis", "Basket"],
    nombre: "Alumno React",
    seleccionado: "",
  };
  contador = 1;

  nuevoDeporte = () => {
    //Como queremos cambiar STATE, recuperamos los deportes que hay en STATE
    var arrayDeportes = this.state.deportes;
    arrayDeportes.push("Deporte: " + this.contador);
    this.contador++;
    this.setState({
      deportes: arrayDeportes,
    });
  };

  render() {
    return (
      <div>
        <h2>Deportes de {this.state.nombre}</h2>
        <button onClick={this.nuevoDeporte}>Crear Deporte</button>
        <ul>
          {this.state.deportes.map((deport, index) => {
            return (
              <Deporte
                key={index}
                deporte={deport}
                funcionalidadFavorito={this.seleccionarFavorito}
              />
            );
          })}
        </ul>

        <h2 style={{ color: "brown" }}>
          Deporte seleccionado:{this.state.seleccionado}
        </h2>
      </div>
    );
  }
}

export default Deportes;
