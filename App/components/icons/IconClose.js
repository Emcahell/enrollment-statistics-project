export const IconClose = () => {

  const $boxIcon = document.createElement('div');
  $boxIcon.classList.add('box-icon-close');

  const $iconClose = document.createElement('img');
  $iconClose.src = './App/assets/x.svg'
  $iconClose.classList.add('icon-close');
  $iconClose.id = 'icon-close';

  $boxIcon.appendChild($iconClose);

  return $boxIcon;
}