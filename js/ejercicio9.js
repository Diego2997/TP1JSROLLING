// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

//!NO SUPE HACERLO :(

let frase = prompt("Escriba una frase");
for (let i = 0; i < frase.length; i++) {
  if (
    frase[i] === "a" ||
    frase[i] === "e" ||
    frase[i] === "i" ||
    frase[i] === "o" ||
    frase[i] === "u"
  ) {
    document.write(frase[i]);
  }
}
