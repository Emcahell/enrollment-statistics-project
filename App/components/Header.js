import { IconMenu } from './IconMenu.js';

export function Header() {
  const $header = document.createElement('header');
  $header.classList.add('header');
  $header.appendChild(IconMenu());

  const $nameApp = document.createElement('h1');
  $nameApp.classList.add('name-app');
  $nameApp.innerHTML = `Estadistica de matricula`;
  $header.appendChild($nameApp);
  
  return $header;
}