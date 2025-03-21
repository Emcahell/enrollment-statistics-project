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
  $button.classList.add('button-calc');
  $button.type = 'button';
  $button.textContent = 'Calcular';

  const $promATotalV = document.createElement('p');
  $promATotalV.classList.add('prom-total-a-v');
  $promATotalV.innerHTML = `Promedio de asistencias: <b>23</b>`;

  const $porcenATotalV = document.createElement('p');
  $porcenATotalV.classList.add('porcen-total-a-v');
  $porcenATotalV.innerHTML = `Porcentaje de asistencias: <b>23</b>`;
  
  $formVarones.appendChild($titleV);
  $formVarones.appendChild($inputTotalV);
  $formVarones.appendChild($inputTotalAV);
  $formVarones.appendChild($button);
  $formVarones.appendChild($promATotalV);
  $formVarones.appendChild($porcenATotalV);

  return $formVarones;
}