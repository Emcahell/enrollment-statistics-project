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

  const $promATotalH = document.createElement('p');
  $promATotalH.classList.add('prom-total-a-h');
  $promATotalH.innerHTML = `Promedio de asistencias: <b>23</b>`;

  const $porcenATotalH = document.createElement('p');
  $porcenATotalH.classList.add('porcen-total-a-h');
  $porcenATotalH.innerHTML = `Porcentaje de asistencias: <b>23</b>`;

  $formHembras.appendChild($titleH);
  $formHembras.appendChild($inputTotalH);
  $formHembras.appendChild($inputTotalAH);
  $formHembras.appendChild($button);
  $formHembras.appendChild($promATotalH);
  $formHembras.appendChild($porcenATotalH);

  return $formHembras;
}