import { Header } from './components/Header.js'; 
import { Contenido } from './components/Contenido.js';
import { router } from './helpers/router.js';
import { sidebarShow } from './helpers/sidebarShow.js';
import { Sidebar } from './components/Sidebar.js';
import { InstallCard } from './components/InstallCard.js';
import { Footer } from './components/Footer.js';
import { BottomNav } from './components/BottomNav.js';

export const App = () => {
  const $root = document.getElementById('root');

  $root.innerHTML = null;
  $root.appendChild(Sidebar());
  $root.appendChild(Header());
  $root.appendChild(Contenido());
  $root.appendChild(InstallCard());
  $root.appendChild(Footer());
  $root.appendChild(BottomNav());

  router();
  sidebarShow();
}