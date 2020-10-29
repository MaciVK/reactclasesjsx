import React, { Component } from "react";

class Comic extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.comic.titulo}</h1>
        <img src={this.props.comic.imagen}></img>
        <h2>{this.props.comic.descripcion}</h2>
        <button
          onClick={() => {
            this.props.metodoSeleccionarComic(this.props.comic);
            console.log(this.props.comic);
          }}
        >
          Seleccionar este comic como Favorito
        </button>
      </div>
    );
  }
}

export default Comic;
