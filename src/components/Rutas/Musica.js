import React, { Component } from "react";
import LogoMusica from "./../../assets/Images/lasagacontinua.jpg";

class Musica extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "yellowgreen" }}>Componente Musica</h1>
        <img src={LogoMusica}></img>
      </div>
    );
  }
}

export default Musica;
