export function Total() {
  const $boxTotal = document.createElement('section');
  $boxTotal.classList.add('box-total');

  const $titlePromATotal = document.createElement('p');
  $titlePromATotal.classList.add('title-prom-total');
  $titlePromATotal.textContent = 'Promedio total de asistencias';
  const $promATotal = document.createElement('p');
  $promATotal.classList.add('prom-total');
  $promATotal.textContent = '23';

  const $titlePorcenATotal = document.createElement('p');
  $titlePorcenATotal.classList.add('title-porcen-total');
  $titlePorcenATotal.textContent = 'Porcentaje total de asistencias';
  const $porcenATotal = document.createElement('p');
  $porcenATotal.classList.add('porcen-total');
  $porcenATotal.textContent = '23';

  $boxTotal.appendChild($titlePromATotal);
  $boxTotal.appendChild($promATotal);
  $boxTotal.appendChild($titlePorcenATotal);
  $boxTotal.appendChild($porcenATotal);

  return $boxTotal;
}