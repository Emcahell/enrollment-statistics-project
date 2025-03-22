import { FormDHabiles } from "../components/FormDHabiles.js";
import { FormHembras } from "../components/FormHembras.js";
import { FormVarones } from "../components/FormVarones.js";


export function inputsDinamicos() {

  
const dHabilesInput = document.getElementById('dias-habiles');
const btnGenerar = document.getElementById('btn-generar');
const boxContInputsV = document.getElementById('box-cont-inputs-v');
const boxContInputsH = document.getElementById('box-cont-inputs-h');
const inputTotalV = document.getElementById('input-total-v');
const inputTotalH =document.getElementById('input-total-h');

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

}