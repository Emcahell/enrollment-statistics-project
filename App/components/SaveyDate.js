export function SaveyDate() {
  const $saveyDate = document.createElement('div');
  $saveyDate.classList.add('date');

  const $inputDate = document.createElement('input');
  $inputDate.classList.add('input-date');
  $inputDate.type = 'date';

  const $button = document.createElement('button');
  $button.classList.add('button-save');
  $button.type = 'submit';
  $button.textContent = 'Guardar datos';

  $saveyDate.appendChild($inputDate);
  $saveyDate.appendChild($button);

  return $saveyDate;
}