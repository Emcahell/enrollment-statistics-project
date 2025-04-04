export const FormHembras = () => {
  const $formHembras = document.createElement('form');
  $formHembras.classList.add('form-hembras');

  const $titleH = document.createElement('h2');
  $titleH.classList.add('title-h');
  $titleH.innerHTML = 'Hembras';

  const $inputTotalH = document.createElement('input');
  $inputTotalH.id = 'input-total-h';
  $inputTotalH.classList.add('input-total-h');
  $inputTotalH.type = 'number';
  $inputTotalH.required = true;
  $inputTotalH.disabled = true;
  $inputTotalH.placeholder = 'Número total de hembras';

  const $labelTotalH = document.createElement('label');
  $labelTotalH.classList.add('label', 'label-total-h');
  $labelTotalH.innerHTML = 'Total de hembras:'

  const $button = document.createElement('button');
  $button.classList.add('button-calc');
  $button.id = 'button-h';
  $button.type = 'button';
  $button.disabled = true;
  $button.textContent = 'Calcular';

  const $boxContPromPorTotal = document.createElement('div');
  $boxContPromPorTotal.classList.add('prom-pro-total')
  const $promATotalH = document.createElement('p');
  $promATotalH.classList.add('prom-total-a-h');
  $promATotalH.id = 'prom-total-a-h';
  $promATotalH.innerHTML = `Promedio de asistencias: <b>0.00</b>`;

  const $porcenATotalH = document.createElement('p');
  $porcenATotalH.classList.add('porcen-total-a-h');
  $porcenATotalH.id = 'porcen-total-a-h';
  $porcenATotalH.innerHTML = `Porcentaje de asistencias: <b>0.00%</b>`;

  //Suma de asistencias
  const $boxInputTotalA = document.createElement('div');
  $boxInputTotalA.classList.add('box-input-total');

  const $labelTotalA = document.createElement('label');
  $labelTotalA.classList.add('label', 'label-asish');
  $labelTotalA.innerHTML = 'Asistencia:'

  const $boxContInputs = document.createElement('div');
  $boxContInputs.classList.add('box-cont-inputs');
  $boxContInputs.id = 'box-cont-inputs-h';
  const $boxContResult = document.createElement('div');
  $boxContResult.classList.add('box-cont-result');
  $boxContResult.id = 'box-cont-result-h';
  // $boxContResult.innerHTML = `=<b class='result-total'>23</b>`;
  
  $boxInputTotalA.appendChild($boxContInputs);
  $boxInputTotalA.appendChild($boxContResult);

  $formHembras.appendChild($titleH);
  $formHembras.appendChild($labelTotalA);
  $formHembras.appendChild($boxInputTotalA);
  $formHembras.appendChild($labelTotalH);
  $formHembras.appendChild($inputTotalH);
  $formHembras.appendChild($button);
  $formHembras.appendChild($boxContPromPorTotal);
  $boxContPromPorTotal.appendChild($promATotalH);
  $boxContPromPorTotal.appendChild($porcenATotalH);

  return $formHembras;
}