// Desafio 1
function compareTrue(v1, v2) {
  if (v1 && v2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(texto) {
  return texto.split(' ');
}

// Desafio 4
function concatName(vetorNomes) {
  return `${vetorNomes[vetorNomes.length - 1]}, ${vetorNomes[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
// referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function highestCount(vetNumeros) {
  let cont = 0;
  const maior = vetNumeros.reduce((a, b) => Math.max(a, b));
  for (let i = 0; i < vetNumeros.length; i += 1) {
    if (vetNumeros[i] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'cat1';
}

function validaFizzBuzzBug(numero) {
  if (numero % 3 === 0) {
    return 'fizz';
  }
  if (numero % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

// Desafio 8
function fizzBuzz(vetNumeros) {
  const saida = [];
  for (let i = 0; i < vetNumeros.length; i += 1) {
    if (vetNumeros[i] % 3 === 0 && vetNumeros[i] % 5 === 0) {
      saida.push('fizzBuzz');
    } else {
      saida.push(validaFizzBuzzBug(vetNumeros[i]));
    }
  }
  return saida;
}

console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(texto) {
  let novaString = '';
  novaString = texto.replace(/a/g, '1');
  novaString = novaString.replace(/e/g, '2');
  novaString = novaString.replace(/i/g, '3');
  novaString = novaString.replace(/o/g, '4');
  novaString = novaString.replace(/u/g, '5');
  return novaString;
}

function decode(texto) {
  let novaString = '';
  novaString = texto.replace(/1/g, 'a');
  novaString = novaString.replace(/2/g, 'e');
  novaString = novaString.replace(/3/g, 'i');
  novaString = novaString.replace(/4/g, 'o');
  novaString = novaString.replace(/5/g, 'u');
  return novaString;
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
};
