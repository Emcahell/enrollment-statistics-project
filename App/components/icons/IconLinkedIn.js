export const IconLinkedIn = () => {
  const $BoxIconLinkedIn = document.createElement('a');
  $BoxIconLinkedIn.href = 'https://www.linkedin.com/in/emmanuel-emcahell-castro-b577aa34a?utm_source=share&utm_campsing=share_via&utm_content=profile&utm_medium=web';

  const $IconLinkedIn = document.createElement('img');
  $IconLinkedIn.src = './App/assets/brand-linkedin.svg';
  $IconLinkedIn.classList.add('icon-brand-instagram');

  $BoxIconLinkedIn.appendChild($IconLinkedIn);

  return $BoxIconLinkedIn;
} 
