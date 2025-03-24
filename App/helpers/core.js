export function core() {
  
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

  // INPUTS DINAMICOS
const generarIdUnico = (prefix, index) => `${prefix}-${index}-${Date.now()}`;

btnGenerar.addEventListener("click", (e) => {
  e.preventDefault();

  let cantidad = parseInt(dHabilesInput.value);
  
  if (isNaN(cantidad) || cantidad <= 0 || cantidad > 99) {
      alert("Por favor, ingrese un número válido entre 1 y 99");
      return;
  }

  // Habilitar inputs
  inputTotalV.disabled = false;
  inputTotalH.disabled = false;
  inputDate.disabled = false;

  boxContInputsV.innerHTML = "";
  boxContInputsH.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {
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


// CALCULAR SUMA  
function calcularSumaV() {
  let suma = 0;
  document.querySelectorAll('.asisv').forEach(input => {
    suma += parseInt(input.value) || 0;
  });
    resultV.innerHTML = `=<b class='result-total'>${suma}</b>`;
}
calcularSumaV();

function calcularSumaH() {
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

    prohOutput.innerHTML = `Promedio de asistencias: <b>${proh.toFixed(2)}</b>`;
    porhOutput.innerHTML = `Porcentaje de asistencias: <b>${porh.toFixed
    (2)}%</b>`;

    calcularTotal();
  });

  const calcularTotal = () => {
    const asisTotalV = parseFloat(resultV.dataset.value) || 0;
    const asisTotalH = parseFloat(resultH.dataset.value) || 0;
    const prov = parseFloat(provOutput.dataset.value) || 0;
    const proh = parseFloat(prohOutput.dataset.value) || 0;
    const porv = parseFloat(porvOutput.dataset.value) || 0;
    const porh = parseFloat(porhOutput.dataset.value) || 0;

    // console.log(`this ${prov}`);
    
    totalSuma.innerHTML = `<b>${(asisTotalH + asisTotalV).toFixed(2)}</b>`;
    totalProvProh.innerHTML = `<b>${(prov + proh).toFixed(2)}</b>`;
    totalPorvPorh.innerHTML = `<b>${(porv + porh).toFixed(2)}%</b>`;
}

  // totalProvProh.innerHTML = `<b>${(prov + proh).toFixed(2)}</b>`;
  // totalPorvPorh.innerHTML = `<b>${(porv + porh).toFixed(2)}%</b>`;


//   function calcularPorcentajes() {
//     const diasA = parseInt(dHabilesInput.value) || 1;
//     const sumaV = parseInt(resultV.textContent.replace('Suma: ', '')) || 0;
//     const sumaH = parseInt(resultH.textContent.replace('Suma: ', '')) || 0;
//     const totalv = parseInt(inputTotalV.value) || 1;
//     const totalh = parseInt(inputTotalH.value) || 1;
    
//     const prov = sumaV / diasA;
//     const proh = sumaH / diasA;
//     const porv = (prov * 100) / totalv;
//     const porh = (proh * 100) / totalh;
    
//     provOutput.innerHTML = `Promedio de asistencias: <b>${prov.toFixed(2)}</b>`;
//     prohOutput.innerHTML = `Promedio de asistencias: <b>${proh.toFixed(2)}</b>`;
//     porvOutput.innerHTML = `Porcentaje de asistencias: <b>${porv.toFixed(2)}%</b>`;
//     porhOutput.innerHTML = `Porcentaje de asistencias: <b>${porh.toFixed(2)}%</b>`;
    
//     totalProvProh.innerHTML = `<b>${(prov + proh).toFixed(2)}</b>`;
//     totalPorvPorh.innerHTML = `<b>${(porv + porh).toFixed(2)}%</b>`;
// }


}