export const core = () => {
  
  const dHabilesInput = document.getElementById('dias-habiles');
  const btnGenerar = document.getElementById('btn-generar');
  const boxContInputsV = document.getElementById('box-cont-inputs-v');
  const boxContInputsH = document.getElementById('box-cont-inputs-h');
  const inputTotalV = document.getElementById('input-total-v');
  const inputTotalH = document.getElementById('input-total-h');
  const inputDate = document.getElementById('input-date');
  const resultV = document.getElementById('box-cont-result-v');
  const resultH = document.getElementById('box-cont-result-h');
  const provOutput = document.getElementById('prom-total-a-v');
  const prohOutput = document.getElementById('prom-total-a-h');
  const porvOutput = document.getElementById('porcen-total-a-v');
  const porhOutput = document.getElementById('porcen-total-a-h');
  const totalSuma = document.getElementById('total-suma-a');
  const totalProvProh = document.getElementById('total-prom-a');
  const totalPorvPorh = document.getElementById('total-por-a');
  const buttonV = document.getElementById('button-v');
  const buttonH = document.getElementById('button-h');
  const buttonSave = document.getElementById('btn-save');
  const mesInput = document.getElementById('input-date');
  // const contenedorHistorial = document.getElementById('contenedor-historial');


const generar = () => {
btnGenerar.addEventListener("click", (e) => {
  e.preventDefault();  

  let dHabiles = parseInt(dHabilesInput.value);

  dHabilesInput.dataset.value = dHabiles;
  
  if (isNaN(dHabiles) || dHabiles <= 0 || dHabiles > 99) {
      alert("Por favor, ingrese un número válido entre 1 y 99");
      return;
  }

  // Habilitar inputs
  inputTotalV.disabled = false;
  inputTotalH.disabled = false;
  inputDate.disabled = false;

  boxContInputsV.innerHTML = "";
  boxContInputsH.innerHTML = "";

  const generarIdUnico = (prefix, index) => `${prefix}-${index}-${Date.now()}`;

  for (let i = 0; i < dHabiles; i++) {
      let inputTotAV = document.createElement("input");
      inputTotAV.type = "number";
      inputTotAV.classList.add("asisv");
      inputTotAV.id = generarIdUnico("asisv", i);
      boxContInputsV.appendChild(inputTotAV);

      let inputTotAH = document.createElement("input");
      inputTotAH.type = "number";
      inputTotAH.classList.add("asish");
      inputTotAH.id = generarIdUnico("asish", i);
      boxContInputsH.appendChild(inputTotAH);
  }
});
}
generar();

// CALCULAR SUMA  
const calcularSumaV = () => {
  let suma = 0;
  document.querySelectorAll('.asisv').forEach(input => {
    suma += parseInt(input.value) || 0;
  });
    resultV.innerHTML = `=<b class='result-total'>${suma}</b>`;
}
calcularSumaV();

const calcularSumaH = () => {
  let suma = 0;
  document.querySelectorAll('.asish').forEach(input => {
      suma += parseInt(input.value) || 0;
  });
  resultH.innerHTML = `=<b class='result-total'>${suma}</b>`;
}
calcularSumaH();

document.addEventListener('input', e => {
  if (e.target.matches('.asisv')) {
    calcularSumaV();
  }
  if (e.target.matches('.asish')) {
    calcularSumaH();
  }
});

// CALCULAR PROMEDIO Y PORCENTAJEEE
  buttonV.addEventListener('click', (e) => {
    e.preventDefault();

    let suma = 0;
    document.querySelectorAll('.asisv').forEach(input => {
      suma += parseInt(input.value) || 0;
    });

    const diasA = parseInt(dHabilesInput.value) || 0;
    const sumaV = suma;
    const totalv = parseInt(inputTotalV.value) || 0;

    console.log(diasA);
    console.log(sumaV);
    console.log(totalv);

    const prov = sumaV / diasA;
    const porv = (prov * 100) / totalv;

    provOutput.dataset.value = prov;
    porvOutput.dataset.value = porv;
    resultV.dataset.value = sumaV;
    inputTotalV.dataset.value = totalv;

    provOutput.innerHTML = `Promedio de asistencias: <b>${prov.toFixed(2)}</b>`;
    porvOutput.innerHTML = `Porcentaje de asistencias: <b>${porv.toFixed
    (2)}%</b>`;

    calcularTotal();
  });

  buttonH.addEventListener('click', (e) => {
    e.preventDefault();

    let suma = 0;
    document.querySelectorAll('.asish').forEach(input => {
      suma += parseInt(input.value) || 0;
    });

    const diasA = parseInt(dHabilesInput.value) || 0;
    const sumaH = suma;
    const totalh = parseInt(inputTotalH.value) || 0;

    console.log(diasA);
    console.log(sumaH);
    console.log(totalh);

    const proh = sumaH / diasA;
    const porh = (proh * 100) / totalh;

    prohOutput.dataset.value = proh;
    porhOutput.dataset.value = porh;
    resultH.dataset.value = sumaH;
    inputTotalH.dataset.value = totalh;

    prohOutput.innerHTML = `Promedio de asistencias: <b>${proh.toFixed(2)}</b>`;
    porhOutput.innerHTML = `Porcentaje de asistencias: <b>${porh.toFixed
    (2)}%</b>`;

    calcularTotal();
  });

  const calcularTotal = () => {
    const dHabiles = parseFloat(dHabilesInput.dataset.value) || 0;
    const asisTotalV = parseFloat(resultV.dataset.value) || 0;
    const asisTotalH = parseFloat(resultH.dataset.value) || 0;
    const totalV = parseFloat(inputTotalV.dataset.value) || 0;
    const totalH = parseFloat(inputTotalH.dataset.value) || 0;

    let sumaTotal = asisTotalV + asisTotalH;
    let provProhTotal = sumaTotal / dHabiles;
    let porvPorhTotal = (provProhTotal * 100) / (totalV + totalH);    

    totalProvProh.dataset.value = provProhTotal;
    totalPorvPorh.dataset.value = porvPorhTotal;
    
    totalSuma.innerHTML = `<b>${(sumaTotal).toFixed(2)}</b>`;
    totalProvProh.innerHTML = `<b>${(provProhTotal).toFixed(2)}</b>`;
    totalPorvPorh.innerHTML = `<b>${(porvPorhTotal).toFixed(2)}%</b>`;
  }

  // GUARDAR EN LOCALSTORAGE
buttonSave.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('button save');

  const mes = mesInput.value;
  if (!mes) {
    Swal.fire('No cielito, selecciona un mes antes de guardar.');
    return;
}
  
  const datos = {
      mes,
      totalv: inputTotalV.value,
      totalh: inputTotalH.value,
      sumaTotalvTotalh: parseInt(inputTotalV.value) + parseInt(inputTotalH.value),
      prov: provOutput.dataset.value,
      proh: prohOutput.dataset.value,
      porv: porvOutput.dataset.value,
      porh: porhOutput.dataset.value,
      provProhTotal: totalProvProh.dataset.value,
      porvPorhTotal: totalPorvPorh.dataset.value
  };
  
  let historial = JSON.parse(localStorage.getItem('historial')) || [];
  historial.unshift(datos);
  localStorage.setItem('historial', JSON.stringify(historial));

  Swal.fire({
    icon: 'success',
    text: 'Tus datos han sido guardados correctamente 😊',
    confirmButtonText: 'Aceptar'
}).then(() => {
    // setTimeout(() => {
      location.reload();
  // }, 1000);
});
  
});

// mostrar historial
// document.addEventListener('DOMContentLoaded', mostrarHistorial);
// const mostrarHistorial = () => {
//   console.log("Ejecutando mostrarHistorial");
//     contenedorHistorial.innerHTML = '';
//     let historial = JSON.parse(localStorage.getItem('historial')) || [];
//     historial.forEach((item) => {
//         const card = document.createElement('div');
//         card.className = 'card';
//         card.innerHTML = `<h3>${item.mes}</h3>
//                           <table>
//                             <tr><td>Prov</td><td>${item.prov}</td></tr>
//                             <tr><td>Proh</td><td>${item.proh}</td></tr>
//                             <tr><td>Porv</td><td>${item.porv}%</td></tr>
//                             <tr><td>Porh</td><td>${item.porh}%</td></tr>
//                           </table>`;
//         contenedorHistorial.appendChild(card);
//     });
//   }
// document.addEventListener('DOMContentLoaded', mostrarHistorial);


}