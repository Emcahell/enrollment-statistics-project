export function Title() {
  const $title = document.createElement('div');

  $title.classList.add('title');
  $title.innerHTML = `<h1>Calcula un nuevo porcentaje de asistencia</h1>`;

  return $title;
}