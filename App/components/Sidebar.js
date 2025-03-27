import { IconClock } from "./IconClock.js";
import { IconClose } from "./IconClose.js";
import { IconGitHub } from "./IconGitHub.js";
import { IconHome } from "./IconHome.js";
import { Iconx } from "./IconX.js";
import { LogoEmcahell } from "./LogoEmcahell.js";

export const Sidebar = () => {

  const $sidebar = document.createElement('div');
  $sidebar.classList.add('sidebar');
  $sidebar.id = 'sidebar';
  
  const $menu = document.createElement('div');
  $menu.classList.add('menu');
  const $optionHome = document.createElement('div');
  $optionHome.classList.add('option-home');
  $optionHome.innerHTML = `
      <a 
        style='text-decoration:none; color:#fff; width:100%;'
        id='inicio' 
        href='#/'>Inicio</a>
  `;
  const $optionHistorial = document.createElement('div');
  $optionHistorial.classList.add('option-historial');
  $optionHistorial.innerHTML = `
      <a 
        style='text-decoration:none; color:#fff; width:100%;'
        id='historial' 
        href='#/historial'>Historial</a>
  `;

  const $footer = document.createElement('footer');
  $footer.classList.add('footer');

  const $footerInfo = document.createElement('div');
  $footerInfo.classList.add('info-footer');
  const $footerTitle = document.createElement('p');
  $footerTitle.classList.add('footer-title');
  $footerTitle.textContent = 'Desarollado por:';

  const $boxsocialMedia = document.createElement('div');
  $boxsocialMedia.classList.add('boxSocialMedia');
  
  $sidebar.appendChild(IconClose());
  $sidebar.appendChild($menu);
  $optionHome.appendChild(IconHome());
  $menu.appendChild($optionHome);
  $optionHistorial.appendChild(IconClock());
  $menu.appendChild($optionHistorial);
  $sidebar.appendChild($footer);
  $footer.appendChild($footerInfo);
  $footerInfo.appendChild($footerTitle);
  $footerInfo.appendChild(LogoEmcahell());
  $footerInfo.appendChild($boxsocialMedia);
  $boxsocialMedia.appendChild(Iconx());
  $boxsocialMedia.appendChild(IconGitHub());

  return $sidebar;
}