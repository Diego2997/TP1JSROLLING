// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let primerNumero = Number(prompt("Ingrese el primer numero"));
let segundoNumero = Number(prompt("Ingrese el segundo numero"));
// if (primerNumero > segundoNumero) {
//   document.write("El mayor es " + primerNumero);
// } else {
//   document.write("El mayor es " + segundoNumero);
// }
primerNumero > segundoNumero
  ? document.write("El mayor es " + primerNumero)
  : document.write("El mayor es " + segundoNumero);
