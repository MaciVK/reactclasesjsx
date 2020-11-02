import React, { Component } from "react";
import LogoTele from "./../../assets/Images/final space.jpg";

class Television extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "brown" }}>Componente Television</h1>
        <img src={LogoTele}></img>
      </div>
    );
  }
}

export default Television;
