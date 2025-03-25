export const SaveyDate = () => {
  const $saveyDate = document.createElement('div');
  $saveyDate.classList.add('cont-save-date');

  const $inputDate = document.createElement('input');
  $inputDate.classList.add('input-date');
  $inputDate.id = 'input-date';
  $inputDate.type = 'month';
  $inputDate.name = 'monthAndYear';
  $inputDate.required = true;
  $inputDate.disabled = true;

  const $button = document.createElement('button');
  $button.classList.add('button-save');
  $button.id = 'btn-save';
  $button.type = 'submit';
  $button.textContent = 'Guardar datos';

  $saveyDate.appendChild($inputDate);
  $saveyDate.appendChild($button);

  return $saveyDate;
}