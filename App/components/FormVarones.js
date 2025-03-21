export function FormVarones() {
  const $formVarones = document.createElement('form');
  $formVarones.classList.add('form-varones');

  const $titleV = document.createElement('h2');
  $titleV.classList.add('title-v');
  $titleV.innerHTML = 'Varones';

  const $inputTotalV = document.createElement('input');
  $inputTotalV.classList.add('input-total-v');
  $inputTotalV.type = 'number';
  $inputTotalV.placeholder = 'Total de varones';

  const $inputTotalAV = document.createElement('input');
  $inputTotalAV.classList.add('input-total-a-v');
  $inputTotalAV.type = 'number';
  $inputTotalAV.placeholder = 'Total de Asistencias';

  const $button = document.createElement('button');
  $button.classList.add('button');
  $button.type = 'button';
  $button.textContent = 'Calcular';

  $formVarones.appendChild($titleV);
  $formVarones.appendChild($inputTotalV);
  $formVarones.appendChild($inputTotalAV);
  $formVarones.appendChild($button);

  return $formVarones;
}