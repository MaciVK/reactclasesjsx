//Trabajando en ES6 SIEMPRE debemos importar component de react
import React, { Component } from "react";
import "./PrimeraClase.css";
//Cualquier clase ES6 hereda de Component
//Siempre tiene que empezar con Mayuscula o NO FUNCIONARA

class PrimeraClase extends Component {
  //Toda clase contiene un metodo Render que se usa para el dibujo del componente
  //El etodo render sera evaluado en todo momento, ahi tendremos el return

  render() {
    return (
      <React.Fragment>
        <h1 className="rojo">Primer componente Class</h1>
      </React.Fragment>
    );
  }
}

export default PrimeraClase;
