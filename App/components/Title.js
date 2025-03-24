export const  Title = () => {
  const $title = document.createElement('div');
  $title.classList.add('box-title');

  $title.innerHTML = `<h1>Calcula un nuevo porcentaje de asistencia</h1>`;

  return $title;
}