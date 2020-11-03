import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import PrimeraClase from "./components/PrimeraClase/PrimeraClase";
import Deportes from "./components/Deportes/Deportes";
import reportWebVitals from "./reportWebVitals";
import Numeros from "./components/Numeros/Numeros";
import Comics from "./components/Comics/Comics";
import EjemploSimple from "./components/Formularios/EjemploSimple";
import Collatz from "./components/Formularios/Collatz";
import SeleccionSimple from "./components/Formularios/SeleccionSimple";
import SeleccionMultiple from "./components/Formularios/SeleccionMultiple";
import PracticaSeleccionMultipleComics from "./components/Formularios/PracticaSeleccionMultipleComics";
import SeleccionComponent from "./components/Formularios/SeleccionComponent";
ReactDOM.render(
  <React.StrictMode>
    {/* <Deportes /> */}
    {/* <Numeros /> */}
    {/* <App /> */}
    {/* <EjemploSimple /> */}
    {/* <Collatz /> */}
    {/* <SeleccionSimple />
    <PracticaSeleccionMultipleComics /> */}
    <SeleccionComponent />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
