import React, { Component } from "react";

export default class EjemploSimple extends Component {
  nombre = React.createRef();
  apellidos = React.createRef();

  recibirDatos = (event) => {
    //En react, hay que cortar el submit para currar en front
    event.preventDefault();

    console.log("Nombre: " + this.nombre.current.value);
    console.log("Apellidos: " + this.apellidos.current.value);
    var usuario = {
      nombre: this.nombre.current.value,
      apellidos: this.apellidos.current.value,
    };
    this.setState({ usuario: usuario });
  };
  //Para dibujar, sabemos que hay que usar un State
  //Almacenamos el usuario en un state
  state = {
    usuario: {},
  };

  render() {
    return (
      <div>
        <h1>Ejemplo Forms React</h1>
        {this.state.usuario.nombre && (
          <h1 style={{ backgroundColor: "blueviolet", color: "white" }}>
            {this.state.usuario.nombre} {this.state.usuario.apellidos}
          </h1>
        )}
        <form onSubmit={this.recibirDatos}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            ref={this.nombre}
            name="nombre"
            onChange={this.recibirDatos}
          ></input>
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            ref={this.apellidos}
            name="apellidos"
            onChange={this.recibirDatos}
          ></input>
          <button>Enviar Datos</button>
        </form>
      </div>
    );
  }
}
