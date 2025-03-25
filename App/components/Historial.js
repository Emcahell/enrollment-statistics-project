export const Historial = () => {

  const $historial = document.createElement('section');
  $historial.classList.add('historial');
  $historial.id = 'historial';

  const $titleHistorial = document.createElement('h1');
  $titleHistorial.classList.add('title-historial');
  $titleHistorial.textContent = 'Historial';

  const $contenedorCards = document.createElement('div');
  $contenedorCards.classList.add('contenedor-cards');
  $contenedorCards.id = 'contenedor-cards';

  $historial.appendChild($titleHistorial);
  $historial.appendChild($contenedorCards);

  return $historial;
}