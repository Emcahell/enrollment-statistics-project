export const addHistorial = () => {
  
  const contenedorHistorial = document.getElementById('contenedor-historial');
  
  const addHistorialData = () => {

  let historial = JSON.parse(localStorage.getItem('historial')) || [];
  historial.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        let formatoMes = new Date(`${item.mes.split('-')}`).toLocaleString('es', {month: 'long', year: 'numeric'});
        card.innerHTML = 
        `
        <svg class='icon-ellipsis' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">< https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"/></svg>
        <div class='delete' data-id='${index}'>Eliminar</div>
        
        <div class='header-card'>
          <h3 class='title-mes'>${formatoMes}</h3>
        <div class='info-matricula'>
          <div class='femme'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                color="#ff8e8e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-gender-femme">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><path d="M12 14v7" /><path d="M7 18h10" />
              </svg>
            <p>${item.totalh}</p>
          </div>
          <div class='male'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"   
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              color="#79a0e7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-gender-male">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><path d="M19 5l-5.4 5.4" /><path d="M19 5h-5" /><path d="M19 5v5" />
            </svg>
            <p>${item.totalv}</p>
          </div>
          <div class='totalfm'>
            <p>= ${item.sumaTotalvTotalh}</p>
          </div>
        </div>
        </div>
                          
        <table>
          <thead>
            <tr>
              <th>Descripción</th> <th>Promedio</th> <th>Porcentaje</th>
            </tr>
          </thead>

          <tr>
            <th>Varones</th> <td>${Math.floor(item.prov)}</td> <td>${Math.floor(item.porv)}%</td>
          </tr>
          <tr>
            <th>Hembras</th> <td>${Math.floor(item.proh)}</td> <td>${Math.floor(item.porh)}%</td>
          </tr>
          <tr>
            <th>Total</th> <td>${Math.floor(item.provProhTotal)}</td> <td>${Math.floor(item.porvPorhTotal)}%</td>
          </tr>
        </table>`;
                                  
        contenedorHistorial.appendChild(card);
      });
    }
    contenedorHistorial.addEventListener('click', (event) => {
      if(event.target.classList.contains('delete')) {
        eliminarCard(event);
      }
  });

  addHistorialData();
  
  const eliminarCard = (event) => {
    
    let historial = JSON.parse(localStorage.getItem('historial')) || [];
    const index = parseInt(event.target.getAttribute('data-id'));
    historial.splice(index, 1);
    localStorage.setItem('historial', JSON.stringify(historial));
    event.target.closest('.card').remove();
}

}