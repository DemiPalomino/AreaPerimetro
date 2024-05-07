function calcularAreaCirculo() {
    const radio = document.getElementById("radio").value;
    const area = Math.PI * (radio ** 2);
    document.getElementById("area-circulo").innerHTML = 'El area es: '+area.toFixed(2);
  }
  
  function calcularPeriCirculo() {
    const radio = document.getElementById("radio").value;
    const peri = 2 * Math.PI * radio;
    document.getElementById("peri-circulo").innerHTML = 'El perimetro es: '+peri.toFixed(2);
  }
  
  
  function calcularPeriTriangulo() {
      const lado2 = document.getElementById("lado2").value;
      const lado3 = document.getElementById("lado3").value;
      const lado4 = document.getElementById("lado4").value;
      const peri2 = parseInt(lado2) + parseInt(lado3) + parseInt(lado4);
      document.getElementById("peri2-triangulo").innerHTML = 'El perimetro es: ' + peri2.toFixed(2);
  }
  
  function calcularAreaTriangulo() {
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const area = (base * altura) / 2;
    document.getElementById("area-triangulo").innerHTML = 'El area es: '+area.toFixed(2);
    }
  function calcularPeriCuadrado() {
    const lado = document.getElementById("lado").value;
    const peri3 = (lado * 4 );
    document.getElementById("peri3-cuadrado").innerHTML = 'El perimetro es: '+peri3.toFixed(2);
  }
  
  function calcularAreaCuadrado() {
    const lado = document.getElementById("lado").value;
    const area = (lado ** 2 );
    document.getElementById("area-cuadrado").innerHTML = 'El area es: '+area.toFixed(2);
  }
  function calcularAreaRectangulo() {
    const base = document.getElementById("base2").value;
    const altura = document.getElementById("altura2").value;
    const area = (base * altura);
    document.getElementById("area-rectangulo").innerHTML = 'El area es: '+area.toFixed(2);
  }
  
  function calcularPeriRectangulo() {
    const base = document.getElementById("base2").value;
    const altura = document.getElementById("altura2").value;
    const peri4 = 2*base + 2*altura;
    document.getElementById("peri4-rectangulo").innerHTML = 'El perimetro es: '+peri4.toFixed(2);
  }

  
// Esta es una función para validar el ingreso, permitiendo solo números.
function validarInput(event) {
  const inputs = event.keyCode;
  if (inputs < 48 || inputs > 57) {
    event.preventDefault();
  }
}

// Aqui agregamos eventos de escucha a los campos de entrada.
document.addEventListener('DOMContentLoaded', () => {
  const inputs2 = document.querySelectorAll('input[type="text"]');
  inputs2.forEach((inputs2) => {
    inputs2.addEventListener('keydown', validarInput);
  });
});
