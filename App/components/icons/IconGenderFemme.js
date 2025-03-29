export const IconGenderFemme = () => {
  
  const $BoxIcon = document.createElement('div');

  const $IconFemme = document.createElement('img');
  $IconFemme.src = './App/assets/icons/gender-femme.svg';
  $IconFemme.classList.add('icon-femme');

  $BoxIcon.appendChild($IconFemme);

  return $BoxIcon;
}