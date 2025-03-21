export function Total() {
  const $boxTotal = document.createElement('section');
  $boxTotal.classList.add('box-total');

  const $titlePromATotal = document.createElement('p');
  $titlePromATotal.classList.add('total');
  $titlePromATotal.textContent = 'Promedio total de asistencias:';
  const $promATotal = document.createElement('p');
  $promATotal.classList.add('total');
  $promATotal.innerHTML = `<b>23</b>`;

  const $titlePorcenATotal = document.createElement('p');
  $titlePorcenATotal.classList.add('total');
  $titlePorcenATotal.textContent = 'Porcentaje total de asistencias:';
  const $porcenATotal = document.createElement('p');
  $porcenATotal.classList.add('total');
  $porcenATotal.innerHTML = `<b>23</b>`;

  $boxTotal.appendChild($titlePromATotal);
  $boxTotal.appendChild($promATotal);
  $boxTotal.appendChild($titlePorcenATotal);
  $boxTotal.appendChild($porcenATotal);

  return $boxTotal;
}