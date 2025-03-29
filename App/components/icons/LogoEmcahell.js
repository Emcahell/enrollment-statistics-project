export const LogoEmcahell = () => {
  const $BoxLogo = document.createElement('div');

  const $Logo = document.createElement('img');
  $Logo.src = './App/assets/emcahell-logo.png';
  $Logo.classList.add('logo');

  $BoxLogo.appendChild($Logo);

  return $BoxLogo;
}