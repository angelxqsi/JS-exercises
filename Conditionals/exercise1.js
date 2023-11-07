const edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
  console.log("Tiene la edad suficiente para conducir.");
} else {
  const añosFaltantes = 18 - edad;
  console.log("Te faltan" + añosFaltantes + "años para conducir.");
}


// comparar edades
const myAge = parseInt(prompt("Ingresa tu edad:"));


const yourAge = parseInt(prompt("Ingresa la edad de otra persona:"));

if (myAge > yourAge) {
  console.log("Yo soy mayor que la otra persona.");
} else if (yourAge > myAge) {
  console.log("La otra persona es mayor que yo.");
} else {
  console.log("Tenemos la misma edad.");
}

//Si a es mayor que b
let a = prompt("Ingrese el primer número: ")
let b = prompt("Ingrese el segundo número: ")

if (a > b) {
    console.log("a es mayor que b")
} else if (a < b) {
    console.log("a es menor que b")
}


// Solicita la entrada del usuario y almacena el mes ingresado
let mesUserInput = prompt("Ingrese el mes:")
let mes = mesUserInput.toLowerCase()
{


    switch (mes) {
      case 'septiembre':
      case 'octubre':
      case 'noviembre':  
    console.log("La temporada es Otoño")
  break

      case 'diciembre':
      case 'enero':
      case 'febrero':
        console.log("La temporada es Invierno")
        break

      case 'marzo':
      case 'abril':
      case 'mayo':
        console.log("La temporada es Primavera")
        break

      case 'junio':
      case 'julio':
      case 'agosto':
        console.log("La temporada es Verano")
        break

  default:
    console.log("mes no valido")

    }
  }



// Solicita la entrada del puntaje del estudiante y almacena el puntaje ingresado
const puntaje = parseInt(prompt("Ingrese el puntaje del estudiante:"));

let calificacion;

if (puntaje >= 80 && puntaje <= 100) {
  calificacion = 'A';
} else if (puntaje >= 70 && puntaje < 80) {
  calificacion = 'B';
} else if (puntaje >= 60 && puntaje < 70) {
  calificacion = 'C';
} else if (puntaje >= 50 && puntaje < 60) {
  calificacion = 'D';
} else if (puntaje >= 0 && puntaje < 50) {
  calificacion = 'F';
} else {
  calificacion = 'Puntaje no válido';
}

console.log("La calificación del estudiante es: " + calificacion);
