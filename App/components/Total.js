export const Total = () => {
  const $boxTotal = document.createElement('section');
  $boxTotal.classList.add('box-total');

  const $titlePromATotal = document.createElement('p');
  $titlePromATotal.classList.add('total');
  $titlePromATotal.textContent = 'Promedio total de asistencias:';
  const $promATotal = document.createElement('p');
  $promATotal.classList.add('total', 'total-result');
  $promATotal.id = 'total-prom-a';
  $promATotal.innerHTML = `<b>0.00</b>`;

  const $titlePorcenATotal = document.createElement('p');
  $titlePorcenATotal.classList.add('total');
  $titlePorcenATotal.textContent = 'Porcentaje total de asistencias:';
  const $porcenATotal = document.createElement('p');
  $porcenATotal.classList.add('total', 'total-result'); 
  $porcenATotal.id = 'total-por-a';
  $porcenATotal.innerHTML = `<b>0.00%</b>`;

  const $titleSumaTotal = document.createElement('p');
  $titleSumaTotal.classList.add('total');
  $titleSumaTotal.textContent = 'Suma total de asistencias:';
  const $sumaTotal = document.createElement('p');
  $sumaTotal.classList.add('total', 'total-result'); 
  $sumaTotal.id = 'total-suma-a';
  $sumaTotal.innerHTML = `<b>0.00</b>`;

  $boxTotal.appendChild($titleSumaTotal);
  $boxTotal.appendChild($sumaTotal);
  $boxTotal.appendChild($titlePromATotal);
  $boxTotal.appendChild($promATotal);
  $boxTotal.appendChild($titlePorcenATotal);
  $boxTotal.appendChild($porcenATotal);

  return $boxTotal;
}