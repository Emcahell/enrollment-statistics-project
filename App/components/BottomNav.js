import { IconHome } from './icons/IconHome.js';
import { IconClock } from './icons/IconClock.js';

export const BottomNav = () => {
  const $nav = document.createElement('nav');
  $nav.classList.add('bottom-nav');

  const $optionHome = document.createElement('a');
  $optionHome.classList.add('bottom-nav__option');
  $optionHome.href = '#/';
  $optionHome.appendChild(IconHome());
  $optionHome.appendChild(document.createTextNode('Inicio'));

  const $optionHistorial = document.createElement('a');
  $optionHistorial.classList.add('bottom-nav__option');
  $optionHistorial.href = '#/historial';
  $optionHistorial.appendChild(IconClock());
  $optionHistorial.appendChild(document.createTextNode('Historial'));

  $nav.appendChild($optionHome);
  $nav.appendChild($optionHistorial);

  return $nav;
}