export function FormDHabiles() {
  const $formDiasHabiles = document.createElement('form');
  $formDiasHabiles.classList.add('form-dias-habiles');

  const $inputDias = document.createElement('input');
  $inputDias.classList.add('input');
  $inputDias.type = 'number';
  $inputDias.placeholder = 'Ingresa los dias hábiles';

  const $button = document.createElement('button');
  $button.classList.add('button-dias-habiles');
  $button.type = 'submit';
  $button.textContent = 'Listo';

  $formDiasHabiles.appendChild($inputDias);
  $formDiasHabiles.appendChild($button);

  return $formDiasHabiles;
}