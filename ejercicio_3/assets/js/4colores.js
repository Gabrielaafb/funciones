
const azul = document.getElementById('azul');
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');

function cambiarColorNegro(event) {
  event.target.style.backgroundColor = 'black';
}

azul.addEventListener('click', cambiarColorNegro);
rojo.addEventListener('click', cambiarColorNegro);
verde.addEventListener('click', cambiarColorNegro);
amarillo.addEventListener('click', cambiarColorNegro);

