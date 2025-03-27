export const IconGitHub = () => {
  const $BoxIconGitHub = document.createElement('a');
  $BoxIconGitHub.href = 'https://github.com/emcahell';


  const $IconGitHub = document.createElement('img');
  $IconGitHub.src = './App/assets/brand-github.svg';
  $IconGitHub.classList.add('icon-brand-github');

  $BoxIconGitHub.appendChild($IconGitHub);

  return $BoxIconGitHub;
} 
