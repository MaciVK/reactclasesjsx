import React, { Component } from "react";
import LogoCine from "./../../assets/Images/pulp.jpg";
class Cine extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "blueviolet" }}>Componente Cine</h1>
        <img src={LogoCine}></img>
      </div>
    );
  }
}

export default Cine;
