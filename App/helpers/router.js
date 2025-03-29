import { Title } from "../components/Title.js";
import { FormDHabiles } from "../components/FormDHabiles.js";
import { FormVarones } from "../components/FormVarones.js";
import { FormHembras } from "../components/FormHembras.js";
import { SaveyDate } from "../components/SaveyDate.js";
import { Total } from "../components/Total.js";
import { Historial } from "../components/Historial.js";
import { core } from "./core.js";
import { addHistorial } from "./addHistorial.js";

export const router = () => {

  const $contenido = document.getElementById('contenido');
  
  const mostrarComponentesIniciales = () => {
    $contenido.innerHTML = '';
    $contenido.appendChild(Title());
    $contenido.appendChild(FormDHabiles());
    $contenido.appendChild(FormVarones());
    $contenido.appendChild(FormHembras());
    $contenido.appendChild(Total());
    $contenido.appendChild(SaveyDate());

    core();
  }
  
  const mostrarComponentesHistorial = () => {
    $contenido.innerHTML = '';
    $contenido.appendChild(Historial());

    addHistorial();
  }
  
  const hashActual = window.location.hash;
    
  if (hashActual === '' || hashActual === '#/') {
    mostrarComponentesIniciales();
  } else if (hashActual === '#/historial') {
    mostrarComponentesHistorial();
  }
  
}
