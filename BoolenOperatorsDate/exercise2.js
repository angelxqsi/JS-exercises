//declaracion de variables
var firstName = "John";
var lastName = "Doe";
var country = "United States";
var city = "New York";
var age = 30;
var isMarried = false;
var year = 2023;

console.log("Tipo de dato de firstName: " + typeof firstName);
console.log("Tipo de dato de lastName: " + typeof lastName);
console.log("Tipo de dato de country: " + typeof country);
console.log("Tipo de dato de city: " + typeof city);
console.log("Tipo de dato de age: " + typeof age);
console.log("Tipo de dato de isMarried: " + typeof isMarried);
console.log("Tipo de dato de year: " + typeof year);

// Verificación de si '10' es igual a 10
console.log('10' === 10); // Devolverá false

// Verificación de si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') === 10); // Devolverá false, ya que '9.8' no se puede convertir en un número entero

// Verificación de cualquier valor booleano (true o false)
var booleanValue = true;
console.log(booleanValue); // Devolverá true

//3 valores que devuelven true
10 === 10; // Devuelve true, ya que 10 es igual a 10
10 < 20; // Devuelve true, ya que 10 es menor que 20
true && true; // Devuelve true, ya que ambas expresiones son verdaderas

//3 valores falsos
10 !== 10; // Devuelve false, ya que 10 no es diferente de 10
30 < 20; // Devuelve false, ya que 30 no es menor que 20
false || false; // Devuelve false, ya que ambas expresiones son falsas


//Calculeprimeroelresultadodelasiguienteexpresióndecomparaciónsinusarconsole.log().
//Despuésdedecidirelresultado,confírmelousandoconsole.log()

/*i. 4 > 3
Resultado: true
ii. 4 >= 3
Resultado: true
iii. 4 < 3
Resultado: false
iv. 4 <= 3
Resultado: false
v. 4 == 4
Resultado: true
vi. 4 === 4
Resultado: true
vii. 4 != 4
Resultado: false
viii. 4 !== 4
Resultado: false
ix. 4 != '4'
Resultado: false
x. 4 == '4'
Resultado: true
xi. 4 === '4'
Resultado: false*/

console.log(4 > 3);      // true
console.log(4 >= 3);     // true
console.log(4 < 3);      // false
console.log(4 <= 3);     // false
console.log(4 == 4);     // true
console.log(4 === 4);    // true
console.log(4 != 4);     // false
console.log(4 !== 4);    // false
console.log(4 != '4');   // false
console.log(4 == '4');   // true
console.log(4 === '4');  // false


//UtiliceelobjetoDatepararealizarlassiguientesactividades

// Crear una instancia del objeto Date para la fecha y hora actual
const fechaActual = new Date();

// Obtener el año actual
const añoActual = fechaActual.getFullYear();

// Obtener el mes actual (0-11, donde 0 es enero y 11 es diciembre)
const mesActual = fechaActual.getMonth() + 1; // Sumar 1 porque los meses se cuentan desde 0.

// Obtener el día del mes actual
const diaDelMes = fechaActual.getDate();

// Obtener el día de la semana actual (0-6, donde 0 es domingo y 6 es sábado)
const diaDeLaSemana = fechaActual.getDay();

// Obtener la hora actual
const horaActual = fechaActual.getHours();

// Obtener los minutos actuales
const minutosActuales = fechaActual.getMinutes();

// Obtener los segundos transcurridos desde el 1 de enero de 1970 (época Unix)
const segundosTranscurridos = fechaActual.getTime() / 1000;

console.log("¿Qué año es hoy? " + añoActual);
console.log("¿Qué mes es hoy con un número? " + mesActual);
console.log("¿Qué fecha es hoy? " + diaDelMes);
console.log("¿Qué día es hoy con un número? " + diaDeLaSemana);
console.log("¿Cuál es la hora actual? " + horaActual);
console.log("¿Cuántos minutos hay actualmente? " + minutosActuales);
console.log("Número de segundos transcurridos desde el 1 de enero de 1970: " + segundosTranscurridos);


//area y base

const base = parseFloat(prompt("Ingrese la base del triángulo:"));

const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

const area = 0.5 * base * altura;

console.log("El área del triángulo con base " + base + " y altura " + altura + " es: " + area);


//perimetro del triangulo

const ladoA = parseFloat(prompt("Ingrese el lado a del triángulo:"));

const ladoB = parseFloat(prompt("Ingrese el lado b del triángulo:"));

const ladoC = parseFloat(prompt("Ingrese el lado c del triángulo:"));

const perimetro = ladoA + ladoB + ladoC;

console.log("El perímetro del triángulo con lados a=" + ladoA + ", b=" + ladoB + " y c=" + ladoC + " es: " + perimetro);


