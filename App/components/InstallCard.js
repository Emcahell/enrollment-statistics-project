let deferredPrompt = null;
let dismissed = sessionStorage.getItem('install-card-dismissed') === '1';
let installed = isInstalled();
let $currentCard = null;

function isInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: window-controls-overlay)').matches ||
    navigator.standalone === true;
}

const isVisible = () => Boolean(deferredPrompt) && !installed && !dismissed;

const syncCard = () => {
  if (!$currentCard) return;
  $currentCard.classList.toggle('install-card--hidden', !isVisible());
};

// Solo navegadores que disparan beforeinstallprompt (Chrome/Edge/Android/escritorio).
// En iOS/Safari nunca se dispara y la card no aparece.
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  syncCard();
});

window.addEventListener('appinstalled', () => {
  installed = true;
  deferredPrompt = null;
  syncCard();
});

export const InstallCard = () => {
  const $card = document.createElement('div');
  $card.classList.add('install-card');
  if (!isVisible()) $card.classList.add('install-card--hidden');

  const $logo = document.createElement('img');
  $logo.src = './App/assets/icons/icon-192.png';
  $logo.alt = 'Logo de la app';
  $logo.classList.add('install-card__logo');

  const $info = document.createElement('div');
  $info.classList.add('install-card__info');
  $info.innerHTML = `
    <p class="install-card__title">Instala la app</p>
    <p class="install-card__text">Agrégarla a tu pantalla de inicio para abrirla más rápido.</p>
  `;

  const $button = document.createElement('button');
  $button.type = 'button';
  $button.classList.add('install-card__button');
  $button.textContent = 'Instalar';
  $button.addEventListener('click', async () => {
    const promptEvent = deferredPrompt;
    if (!promptEvent) return;

    // Se oculta de inmediato: el prompt ya quedó consumido y el botón no debe quedar "muerto"
    deferredPrompt = null;
    syncCard();

    promptEvent.prompt();
    await promptEvent.userChoice;
    syncCard();
  });

  const $close = document.createElement('button');
  $close.type = 'button';
  $close.classList.add('install-card__close');
  $close.setAttribute('aria-label', 'Cerrar');
  $close.innerHTML = `<img src="./App/assets/x.svg" alt="">`;
  $close.addEventListener('click', () => {
    dismissed = true;
    sessionStorage.setItem('install-card-dismissed', '1');
    syncCard();
  });

  $card.appendChild($logo);
  $card.appendChild($info);
  $card.appendChild($button);
  $card.appendChild($close);

  $currentCard = $card;

  return $card;
}