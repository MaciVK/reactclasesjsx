import React, { Component } from "react";

class Deporte extends Component {
  state = { seleccionado: "" };

  seleccionarDeporte = () => {
    //Cuando se pulse en el boton, llamamos al metodo del padre, que se ha enviado en PROPS
    // console.log(this.props.deporte);
    // //Cuando el user haga click, cambiamos el valor del State
    // this.setState({
    //   seleccionado: this.props.funcionalidadFavorito,
    // });
    this.props.funcionalidadFavorito(this.props.deporte);
  };

  render() {
    return (
      <React.Fragment>
        <li style={{ color: "blueviolet" }}>
          {this.props.deporte}{" "}
          <button onClick={this.seleccionarDeporte}>Seleccionar Deporte</button>
          {/* <span style={{ color: "rebeccapurple" }}>
            {this.state.seleccionado}
          </span>*/}
        </li>
      </React.Fragment>
    );
  }
}

export default Deporte;
