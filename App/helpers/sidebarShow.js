export const sidebarShow = () => {

  const open = document.getElementById('icon-open');
  const close = document.getElementById('icon-close');
  const inicio = document.getElementById('inicio');
  const historial = document.getElementById('historial');
  const sidebar = document.getElementById('sidebar');
  const body = document.getElementById('body');
  
  // Abrir sidebar
  open.addEventListener('click', () => {
    console.log('clickkk');
    
    sidebar.classList.add('panel-active');
    body.classList.add('showPseudo');
  });

  // Cerrar sidebar
  close.addEventListener('click', () => {
    sidebar.classList.remove('panel-active');
    body.classList.remove('showPseudo');
  });

  inicio.addEventListener('click', () => {
    sidebar.classList.remove('panel-active');
    body.classList.remove('showPseudo');
  });

  historial.addEventListener('click', () => {
    sidebar.classList.remove('panel-active');
    body.classList.remove('showPseudo');
  });


}