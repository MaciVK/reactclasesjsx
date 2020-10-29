//Trabajando en ES6 SIEMPRE debemos importar component de react
import React, { Component } from "react";
import "./PrimeraClase.css";
//Cualquier clase ES6 hereda de Component
//Siempre tiene que empezar con Mayuscula o NO FUNCIONARA

//Tambien se pueden declara metodos fuera de la clase, con la palabra Function
//Aunque no se puede usar variables de la clase:

function miFunction() {
  console.log("Esta primera funcion ha sido creado fuera de la clase");
}

//Para llamar a las funciones externas no se usa THIS

class PrimeraClase extends Component {
  //Para crear metodos de la clase, no se utiliza ninguna palabra clave
  //Lo mismo vale para variables:
  //var contador-->NO RECONOCE LA PALABRA CLAVE VAR, ENTONCES
  contador = 1;
  metodoAccion = () => {
    console.log("Contador clase: " + this.contador);
    this.contador++;
  };

  //Toda clase contiene un metodo Render que se usa para el dibujo del componente
  //El metodo render sera evaluado en todo momento, ahi tendremos el return

  //Podemos manejas variables de estado para los dibujos
  //Lar variables de estado debemos declararlas para poder utilizarlas->
  // state={var1:valor1,var2:valor2,....variableN:valorN}
  //Se puede combinar las props que se reciben con State
  state = { valor: parseInt(this.props.inicio) };
  incrementarEstado = () => {
    //Tendremos un contador,para dibujar su incremento en la pagina
    //Cada vez que entremos aqui, incrementamos el contador
    this.setState({
      valor: this.state.valor + 1,
    });
  };

  render() {
    //Dentro de Render podemos decara funciones y/o variables, pero hay que hacerlo
    //con la sintaxis anterior: var, const....
    //Hay diferencia entre dentro y fuera de render()

    //render() se ejecuta cada vez que existen cambios en el dibujo
    var numero = 1;
    const hacerAlgo = () => {
      numero++;
      console.log("Contador de render " + numero);
    };
    return (
      <React.Fragment>
        <h1 className="rojo">{this.props.titulo}</h1>
        <h2 className="azul">Estado: {this.state.valor}</h2>
        <button onClick={this.metodoAccion}>Incrementar contador</button>
        <button
          onClick={() => {
            miFunction();
            //this.hacerAlgo();
            //Si el metodo o la variable esta en el render, no lleva this
            hacerAlgo();
            this.incrementarEstado();
          }}
        >
          Metodo fuera de la clase
        </button>
      </React.Fragment>
    );
  }
}

export default PrimeraClase;
