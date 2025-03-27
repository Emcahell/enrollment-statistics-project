import { Title } from "../components/Title.js";
import { FormDHabiles } from "../components/FormDHabiles.js";
import { FormVarones } from "../components/FormVarones.js";
import { FormHembras } from "../components/FormHembras.js";
import { SaveyDate } from "../components/SaveyDate.js";
import { Total } from "../components/Total.js";
import { Historial } from "../components/Historial.js";

export const router = () => {
  
  const mostrarComponentesIniciales = () => {
  const $contenido = document.getElementById('contenido');

  $contenido.appendChild(Title());
  $contenido.appendChild(FormDHabiles());
  $contenido.appendChild(FormVarones());
  $contenido.appendChild(FormHembras());
  $contenido.appendChild(Total());
  $contenido.appendChild(SaveyDate());

}
  
  const mostrarComponentesHistorial = () => {
    const $contenido = document.getElementById('contenido');

    $contenido.appendChild(Historial());

  }
  
    const hashActual = window.location.hash;
  
    if (hashActual === '' || hashActual === '#/') {
      mostrarComponentesIniciales();
    } else if (hashActual === '#/historial') {
      mostrarComponentesHistorial();
    }

}
