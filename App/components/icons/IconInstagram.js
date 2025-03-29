export const IconInstagram = () => {
  const $BoxIconInstagram = document.createElement('a');
  $BoxIconInstagram.href = 'https://instagram.com/kromwellykz';

  const $IconInstagram = document.createElement('img');
  $IconInstagram.src = './App/assets/brand-instagram.svg';
  $IconInstagram.classList.add('icon-brand-instagram');

  $BoxIconInstagram.appendChild($IconInstagram);

  return $BoxIconInstagram;
} 
