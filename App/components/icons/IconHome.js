export const IconHome = () => {
  
  const $BoxIcon = document.createElement('div');

  const $IconHome = document.createElement('img');
  $IconHome.src = './App/assets/home.svg';
  $IconHome.classList.add('icon-home');

  $BoxIcon.appendChild($IconHome);

  return $BoxIcon;
}