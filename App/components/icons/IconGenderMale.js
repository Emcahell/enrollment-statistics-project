export const IconGenderMale = () => {
  
  const $BoxIcon = document.createElement('div');

  const $IconMale = document.createElement('img');
  $IconMale.src = './App/assets/icons/gender-male.svg';
  $IconMale.classList.add('icon-male');

  $BoxIcon.appendChild($IconMale);

  return $BoxIcon;
}