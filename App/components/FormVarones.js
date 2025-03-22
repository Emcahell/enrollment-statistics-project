export function FormVarones() {
  const $formVarones = document.createElement('form');
  $formVarones.classList.add('form-varones');

  const $titleV = document.createElement('h2');
  $titleV.classList.add('title-v');
  $titleV.innerHTML = 'Varones';

  const $inputTotalV = document.createElement('input');
  $inputTotalV.id = 'input-total-v';
  $inputTotalV.classList.add('input-total-v');
  $inputTotalV.type = 'number';
  $inputTotalV.required = true;
  $inputTotalV.disabled = true;
  $inputTotalV.placeholder = 'Ingresa el total de varones';

  const $labelTotalV = document.createElement('label');
  $labelTotalV.classList.add('label');
  $labelTotalV.innerHTML = 'Total de varones:'

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

  //Suma de asistencias
  const $boxInputTotalA = document.createElement('div');
  $boxInputTotalA.classList.add('box-input-total');

  const $labelTotalA = document.createElement('label');
  $labelTotalA.classList.add('label');
  $labelTotalA.innerHTML = 'Asistencia:'

  const $boxContInputs = document.createElement('div');
  $boxContInputs.classList.add('box-cont-inputs');
  $boxContInputs.id = 'box-cont-inputs-v';
  const $boxContResult = document.createElement('div');
  $boxContResult.classList.add('box-cont-result');
  $boxContResult.id = 'box-cont-result-v';
  // $boxContResult.innerHTML = `=<b class='result-total'></b>`;
  
  // const $inputTotalAV1 = document.createElement('input');
  // $inputTotalAV1.classList.add('input-total-a-v');
  // $inputTotalAV1.type = 'number';
  // const $inputTotalAV2 = document.createElement('input');
  // $inputTotalAV2.classList.add('input-total-a-v');
  // $inputTotalAV2.type = 'number';
  // const $inputTotalAV3 = document.createElement('input');
  // $inputTotalAV3.classList.add('input-total-a-v');
  // $inputTotalAV3.type = 'number';
  // const $inputTotalAV4 = document.createElement('input');
  // $inputTotalAV4.classList.add('input-total-a-v');
  // $inputTotalAV4.type = 'number';
  // const $inputTotalAV5 = document.createElement('input');
  // $inputTotalAV5.classList.add('input-total-a-v');
  // $inputTotalAV5.type = 'number';
  // const $inputTotalAV6 = document.createElement('input');
  // $inputTotalAV6.classList.add('input-total-a-v');
  // $inputTotalAV6.type = 'number';
  
  $boxInputTotalA.appendChild($boxContInputs);
  $boxInputTotalA.appendChild($boxContResult);
  // $boxContInputs.appendChild($inputTotalAV1);
  // $boxContInputs.appendChild($inputTotalAV2);
  // $boxContInputs.appendChild($inputTotalAV3);
  // $boxContInputs.appendChild($inputTotalAV4);
  // $boxContInputs.appendChild($inputTotalAV5);
  // $boxContInputs.appendChild($inputTotalAV6);


  $formVarones.appendChild($titleV);
  $formVarones.appendChild($labelTotalA);
  $formVarones.appendChild($boxInputTotalA);
  $formVarones.appendChild($labelTotalV);
  $formVarones.appendChild($inputTotalV);
  $formVarones.appendChild($button);
  $formVarones.appendChild($promATotalV);
  $formVarones.appendChild($porcenATotalV);

  return $formVarones;
}