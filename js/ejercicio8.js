// Escribe un programa que pida un número y diga si es divisible por 2

let primerNumero = Number(prompt("Ingrese el primer numero"));
if (primerNumero % 2 === 0) {
  document.write(`El numero ${primerNumero} es divisible en 2`);
} else {
  document.write(`El numero ${primerNumero} no es divisible en 2`);
}
