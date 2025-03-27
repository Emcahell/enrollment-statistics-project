export const addHistorial = () => {

  const contenedorHistorial = document.getElementById('contenedor-historial');
  
  const $addHistorial = () => {

  console.log("Ejecutando mostrarHistorial");
  contenedorHistorial.innerHTML = '';
  let historial = JSON.parse(localStorage.getItem('historial')) || [];
  historial.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${item.mes}</h3>
                          <table>
                            <tr><td>Prov</td><td>${item.prov}</td></tr>
                            <tr><td>Proh</td><td>${item.proh}</td></tr>
                            <tr><td>Porv</td><td>${item.porv}%</td></tr>
                            <tr><td>Porh</td><td>${item.porh}%</td></tr>
                          </table>`;
        contenedorHistorial.appendChild(card);
      });
  }
document.addEventListener('DOMContentLoaded', $addHistorial);

}