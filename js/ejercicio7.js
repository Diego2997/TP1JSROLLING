// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let primerNumero = Number(prompt("Ingrese el primer numero"));
let segundoNumero = Number(prompt("Ingrese el segundo numero"));
let tercerNumero = Number(prompt("Ingrese el tercer numero"));

if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
  document.write("El mayor es " + primerNumero);
} else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
  document.write("El mayor es " + segundoNumero);
} else {
  document.write("El mayor es " + tercerNumero);
}
