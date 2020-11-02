import React, { Component } from "react";
import LogoHome from "./../../assets/Images/bycicle day.jpg";
class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>Home</h1>
        <img src={LogoHome}></img>
      </div>
    );
  }
}

export default Home;
