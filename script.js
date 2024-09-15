import Cambio from "./Clases/Cambio.js";
import TorresDeHanoi from "./Clases/TorresDeHanoi.js";

// Obtener elementos HTML
const seleccionPractica = document.getElementById("work-selector");
const contenedor = document.querySelector(".forms");

// Elementos de calculadora de cambios 
const formCambio = document.getElementById('form-cambio');
const montoTotal = document.getElementById('monto');
const montoRecibido = document.getElementById('pago');
const cambioSpan = document.getElementById('resultado');

// Elementos de torre de Hanói
const formHanoi = document.getElementById('form-hanoi');
const numDiscos = document.getElementById('num-discos'); 

// Ocultar inicialmente los formularios
contenedor.style.display = "none";
ocultarFormularios();

// Función para ocultar los formularios de los problemas
function ocultarFormularios() {
  formCambio.style.display = "none";
  formHanoi.style.display = "none";
}

// Función que reacciona al evento "change" para mostrar el formulario correspondiente
seleccionPractica.addEventListener("change", function (event) {
  ocultarFormularios();

  if (event.target.value) {
    contenedor.style.display = "block";
  } else {
    contenedor.style.display = "none";
  }

  switch (event.target.value) {
    case "cambio":
      formCambio.style.display = "block";
      break;
    case "hanoi": 
      formHanoi.style.display = "block";
      break;
  }
});

// Evento de submit para el formulario de la calculadora de cambios
formCambio.addEventListener("submit", (event) => {
  event.preventDefault();

  const total = parseFloat(montoTotal.value);
  const monto = parseFloat(montoRecibido.value);

  if (isNaN(total) || isNaN(monto) || total < 0 || monto < 0){
    alert('Los campos no deben ser nulos o negativos')
    return null
  }

  const cambio = new Cambio();
  const resultado = cambio.gestionarCambio(total * 100, monto * 100);
  cambioSpan.textContent = resultado;
});

// Evento de submit para el formulario de las Torres de Hanói
formHanoi.addEventListener("submit", (event) => {
  event.preventDefault();

  const numerosDiscos = parseInt(numDiscos.value); // Obtener el número de discos
  if (isNaN(numerosDiscos) || numerosDiscos <= 0) {
    alert('Por favor, ingresa un número válido de discos.');
    return;
  }

  // Limpiar movimientos previos
  document.getElementById('movimientos').innerHTML = '';

  // Crear una nueva instancia del juego y resolver
  const juego = new TorresDeHanoi(numerosDiscos); // Pasar el número correcto de discos
  juego.resolverHanoi(numerosDiscos, juego.origen, juego.destino, juego.auxiliar); // Usar "numerosDiscos"
});
