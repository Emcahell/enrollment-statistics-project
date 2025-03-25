import { SaveyDate } from './components/SaveyDate.js';
import { FormDHabiles } from './components/FormDHabiles.js';
import { FormHembras } from './components/FormHembras.js';
import { FormVarones } from './components/FormVarones.js';
import { Header } from './components/Header.js'; 
import { Title } from './components/Title.js';
import { Total } from './components/Total.js';
import { Contenido } from './components/Contenido.js';
import { core } from './helpers/core.js';
import { router } from './helpers/router.js';

export const App = () => {
  const $root = document.getElementById('root');

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Contenido());
  // $root.appendChild(Title());
  // $root.appendChild(FormDHabiles());
  // $root.appendChild(FormVarones());
  // $root.appendChild(FormHembras());
  // $root.appendChild(Total());
  // $root.appendChild(SaveyDate());

  router();
  core();
}