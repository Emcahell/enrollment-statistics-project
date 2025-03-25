export const FormDHabiles = () => {
  const $formDiasHabiles = document.createElement('form');
  $formDiasHabiles.classList.add('form-dias-habiles');

  const $inputDias = document.createElement('input');
  $inputDias.classList.add('input-habiles');
  $inputDias.type = 'number';
  $inputDias.required = true;
  $inputDias.id = 'dias-habiles';
  $inputDias.placeholder = 'Ingresa los dias hábiles';
  const $label = document.createElement('label');
  $label.classList.add('label-dias-habiles');
  $label.innerHTML = 'Dias hábiles:'

  const $button = document.createElement('button');
  $button.classList.add('button-dias-habiles');
  $button.id = 'btn-generar';
  $button.type = 'submit';
  $button.textContent = 'Listo';

  $formDiasHabiles.appendChild($label);
  $formDiasHabiles.appendChild($inputDias);
  $formDiasHabiles.appendChild($button);

  return $formDiasHabiles;
}