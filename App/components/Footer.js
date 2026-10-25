import { IconGitHub } from './icons/IconGitHub.js';
import { IconLinkedIn } from './icons/IconLinkedIn.js';

export const Footer = () => {
  const $footer = document.createElement('footer');
  $footer.classList.add('page-footer');

  const $footerInfo = document.createElement('div');
  $footerInfo.classList.add('page-footer__info');

  const $footerTitle = document.createElement('p');
  $footerTitle.classList.add('page-footer__title');
  $footerTitle.innerHTML = `
      <span> Made by Emcahell </span>
      <span
        style='font-size: 9px; color: #004925'
      > v.0.3.0 </span>
  `;

  const $socialMedia = document.createElement('div');
  $socialMedia.classList.add('page-footer__social');
  $socialMedia.appendChild(IconGitHub());
  $socialMedia.appendChild(IconLinkedIn());

  $footerInfo.appendChild($footerTitle);
  $footerInfo.appendChild($socialMedia);
  $footer.appendChild($footerInfo);

  return $footer;
}