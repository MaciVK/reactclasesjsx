import React, { Component } from "react";

export default class ElementoListaCollatz extends Component {
  render() {
    return (
      <React.Fragment>
        <li>{this.props.numero}</li>
      </React.Fragment>
    );
  }
}
