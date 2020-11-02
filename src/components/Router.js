import React, { Component } from "react";
//Para ROUTR hay que agregar unos componentes de la libreria router-dom0
import { BrowserRouter, Route, Switch } from "react-router-dom";
//TODOS los componentes entre lso que vayamos a manejar, hay que importarlos AQUI
import Home from "./Rutas/Home";
import Cine from "./Rutas/Cine";
import Musica from "./Rutas/Musica";
import Television from "./Rutas/Television";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/musica" component={Musica} />
          <Route path="/television" component={Television} />
          <Route path="/cine" component={Cine} />
        </Switch>
      </BrowserRouter>
    );
  }
}
