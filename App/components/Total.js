export const Total = () => {
  const $boxTotal = document.createElement('section');
  $boxTotal.classList.add('box-total');

  const $boxPromTotal = document.createElement('div');
  $boxPromTotal.classList.add('box-result-total');
  const $titlePromATotal = document.createElement('p');
  $titlePromATotal.classList.add('total');
  $titlePromATotal.textContent = 'Promedio total de asistencias';
  const $promATotal = document.createElement('p');
  $promATotal.classList.add('total', 'total-result');
  $promATotal.id = 'total-prom-a';
  $promATotal.innerHTML = `<b>0.00</b>`;

  const $boxPorTotal = document.createElement('div');
  $boxPorTotal.classList.add('box-result-total');
  const $titlePorcenATotal = document.createElement('p');
  $titlePorcenATotal.classList.add('total');
  $titlePorcenATotal.textContent = 'Porcentaje total de asistencias';
  const $porcenATotal = document.createElement('p');
  $porcenATotal.classList.add('total', 'total-result'); 
  $porcenATotal.id = 'total-por-a';
  $porcenATotal.innerHTML = `<b>0.00%</b>`;

  const $boxTotalTotal = document.createElement('div');
  $boxTotalTotal.classList.add('box-result-total');
  const $titleSumaTotal = document.createElement('p');
  $titleSumaTotal.classList.add('total');
  $titleSumaTotal.textContent = 'Suma total de asistencias';
  const $sumaTotal = document.createElement('p');
  $sumaTotal.classList.add('total', 'total-result'); 
  $sumaTotal.id = 'total-suma-a';
  $sumaTotal.innerHTML = `<b>0.00</b>`;

  $boxTotal.appendChild($boxTotalTotal);
  $boxTotalTotal.appendChild($titleSumaTotal);
  $boxTotalTotal.appendChild($sumaTotal);
  $boxTotal.appendChild($boxPromTotal);
  $boxPromTotal.appendChild($titlePromATotal);
  $boxPromTotal.appendChild($promATotal);
  $boxTotal.appendChild($boxPorTotal);
  $boxPorTotal.appendChild($titlePorcenATotal);
  $boxPorTotal.appendChild($porcenATotal);

  return $boxTotal;
}