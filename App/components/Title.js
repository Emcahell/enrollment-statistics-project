export const  Title = () => {
  const $title = document.createElement('div');
  $title.classList.add('box-title');

  $title.innerHTML = `<h1>Calcula una nueva asistencia</h1>`;

  return $title;
}