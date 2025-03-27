export const IconMenu = () => {
  const $iconMenu = document.createElement('div');
  $iconMenu.classList.add('icon-menu');

  const $iconImg = document.createElement('img');
  $iconImg.src = './App/assets/icon-menu-left.svg';
  $iconImg.alt = 'menú';
  $iconImg.id = 'icon-open';
  $iconMenu.appendChild($iconImg);

  return $iconMenu;
}