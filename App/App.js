import { Header } from './components/Header.js'; 
import { Contenido } from './components/Contenido.js';
import { router } from './helpers/router.js';
import { sidebarShow } from './helpers/sidebarShow.js';
import { Sidebar } from './components/Sidebar.js';

export const App = () => {
  const $root = document.getElementById('root');

  $root.innerHTML = null;
  $root.appendChild(Sidebar());
  $root.appendChild(Header());
  $root.appendChild(Contenido());

  router();
  sidebarShow();
}