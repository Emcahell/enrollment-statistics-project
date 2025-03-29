export const Iconx = () => {
  const $BoxIconX = document.createElement('a');
  $BoxIconX.href = 'https://x.com/kromwellykz';


  const $IconX = document.createElement('img');
  $IconX.src = './App/assets/brand-x.svg';
  $IconX.classList.add('icon-brand-x');

  $BoxIconX.appendChild($IconX);

  return $BoxIconX;
} 
