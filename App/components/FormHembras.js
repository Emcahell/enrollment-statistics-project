export function FormHembras() {
  const $formHembras = document.createElement('form');
  $formHembras.classList.add('form-hembras');

  const $titleH = document.createElement('h2');
  $titleH.classList.add('title-h');
  $titleH.innerHTML = 'Hembras';

  const $inputTotalH = document.createElement('input');
  $inputTotalH.classList.add('input-total-h');
  $inputTotalH.type = 'number';
  $inputTotalH.placeholder = 'Total de hembras';

  const $inputTotalAH = document.createElement('input');
  $inputTotalAH.classList.add('input-total-a-h');
  $inputTotalAH.type = 'number';
  $inputTotalAH.placeholder = 'Total de Asistencias';

  const $button = document.createElement('button');
  $button.classList.add('button');
  $button.type = 'button';
  $button.textContent = 'Calcular';

  $formHembras.appendChild($titleH);
  $formHembras.appendChild($inputTotalH);
  $formHembras.appendChild($inputTotalAH);
  $formHembras.appendChild($button);

  return $formHembras;
}