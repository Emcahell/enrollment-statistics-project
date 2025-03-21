import { FormDHabiles } from './components/FormDHabiles.js';
import { FormVarones } from './components/FormVarones.js';
import { Header } from './components/Header.js'; 
import { Title } from './components/Title.js';

export function App() {
  const $root = document.getElementById('root');

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Title());
  $root.appendChild(FormDHabiles());
  $root.appendChild(FormVarones());
}