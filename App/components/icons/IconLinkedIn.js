export const IconLinkedIn = () => {
  const $BoxIconLinkedIn = document.createElement('a');
  $BoxIconLinkedIn.href = 'https://www.linkedin.com/in/emmanuel-emcahell-castro-b577aa34a?utm_source=linkedin&utm_medium=organic&utm_campaign=profile-badge';

  const $IconLinkedIn = document.createElement('img');
  $IconLinkedIn.src = './App/assets/brand-linkedin.svg';
  $IconLinkedIn.classList.add('icon-brand-instagram');

  $BoxIconLinkedIn.appendChild($IconLinkedIn);

  return $BoxIconLinkedIn;
} 
