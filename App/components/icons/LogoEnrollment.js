export const LogoEnrollment = () => {
  const $BoxLogo = document.createElement('div');

  const $Logo = document.createElement('img');
  $Logo.src = './App/assets/enrollment-logo.png';
  $Logo.classList.add('logo');

  $BoxLogo.appendChild($Logo);

  return $BoxLogo;
}