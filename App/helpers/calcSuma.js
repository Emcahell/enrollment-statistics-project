import { FormHembras } from "../components/FormHembras.js";
import { FormVarones } from "../components/FormVarones.js";

export function calcSuma() {

  const resultV = document.getElementById('box-cont-result-v');
  const resultH = document.getElementById('box-cont-result-h');

  function calcularSumaV() {
    let suma = 0;
    document.querySelectorAll('.asisv').forEach(input => {
      const valor = parseInt(input.value);
      if (!isNaN(valor)) {
        suma += valor;
      }
    });
    if (resultV) {      
      resultV.innerHTML = `=<b class='result-total'>${suma}</b>`;
    }
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
}