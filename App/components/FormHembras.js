export function FormHembras() {
  const $formHembras = document.createElement('form');
  $formHembras.classList.add('form-hembras');

  const $titleH = document.createElement('h2');
  $titleH.classList.add('title-h');
  $titleH.innerHTML = 'Hembras';

  const $inputTotalH = document.createElement('input');
  $inputTotalH.classList.add('input-total-h');
  $inputTotalH.type = 'number';
  $inputTotalH.placeholder = 'Ingresa el total de hembras';

  const $labelTotalH = document.createElement('label');
  $labelTotalH.classList.add('label');
  $labelTotalH.innerHTML = 'Total de hembras:'

  const $button = document.createElement('button');
  $button.classList.add('button-calc');
  $button.type = 'button';
  $button.textContent = 'Calcular';

  const $promATotalH = document.createElement('p');
  $promATotalH.classList.add('prom-total-a-h');
  $promATotalH.innerHTML = `Promedio de asistencias: <b>23</b>`;

  const $porcenATotalH = document.createElement('p');
  $porcenATotalH.classList.add('porcen-total-a-h');
  $porcenATotalH.innerHTML = `Porcentaje de asistencias: <b>23</b>`;

  //Suma de asistencias
  const $boxInputTotalA = document.createElement('div');
  $boxInputTotalA.classList.add('box-input-total');

  const $labelTotalA = document.createElement('label');
  $labelTotalA.classList.add('label');
  $labelTotalA.innerHTML = 'Asistencia:'

  const $boxContInputs = document.createElement('div');
  $boxContInputs.classList.add('box-cont-inputs');
  const $boxContResult = document.createElement('div');
  $boxContResult.classList.add('box-cont-result');
  $boxContResult.innerHTML = `=<b class='result-total'>23</b>`;
  
  const $inputTotalAH1 = document.createElement('input');
  $inputTotalAH1.classList.add('input-total-a-h');
  $inputTotalAH1.type = 'number';
  const $inputTotalAH2 = document.createElement('input');
  $inputTotalAH2.classList.add('input-total-a-h');
  $inputTotalAH2.type = 'number';
  const $inputTotalAH3 = document.createElement('input');
  $inputTotalAH3.classList.add('input-total-a-h');
  $inputTotalAH3.type = 'number';
  const $inputTotalAH4 = document.createElement('input');
  $inputTotalAH4.classList.add('input-total-a-h');
  $inputTotalAH4.type = 'number';
  const $inputTotalAH5 = document.createElement('input');
  $inputTotalAH5.classList.add('input-total-a-h');
  $inputTotalAH5.type = 'number';
  const $inputTotalAH6 = document.createElement('input');
  $inputTotalAH6.classList.add('input-total-a-h');
  $inputTotalAH6.type = 'number';
  
  $boxInputTotalA.appendChild($boxContInputs);
  $boxInputTotalA.appendChild($boxContResult);
  $boxContInputs.appendChild($inputTotalAH1);
  $boxContInputs.appendChild($inputTotalAH2);
  $boxContInputs.appendChild($inputTotalAH3);
  $boxContInputs.appendChild($inputTotalAH4);
  $boxContInputs.appendChild($inputTotalAH5);
  $boxContInputs.appendChild($inputTotalAH6);

  $formHembras.appendChild($titleH);
  $formHembras.appendChild($labelTotalA);
  $formHembras.appendChild($boxInputTotalA);
  $formHembras.appendChild($labelTotalH);
  $formHembras.appendChild($inputTotalH);
  // $formHembras.appendChild($inputTotalAH);
  $formHembras.appendChild($button);
  $formHembras.appendChild($promATotalH);
  $formHembras.appendChild($porcenATotalH);

  return $formHembras;
}