export const FormVarones = () => {
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
  $button.id = 'button-v';
  $button.type = 'button';
  $button.textContent = 'Calcular';

  const $promATotalV = document.createElement('p');
  $promATotalV.classList.add('prom-total-a-v');
  $promATotalV.id = 'prom-total-a-v';
  $promATotalV.innerHTML = `Promedio de asistencias: <b>0.00</b>`;

  const $porcenATotalV = document.createElement('p');
  $porcenATotalV.classList.add('porcen-total-a-v');
  $porcenATotalV.id = 'porcen-total-a-v';
  $porcenATotalV.innerHTML = `Porcentaje de asistencias: <b>0.00%</b>`;

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
  
  $boxInputTotalA.appendChild($boxContInputs);
  $boxInputTotalA.appendChild($boxContResult);

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