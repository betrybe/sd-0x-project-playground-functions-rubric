function compareTrue(value1, value2) {
  return ((value1 === true) && (value2 === true));
}
function calcArea(base, height) {
  return (base * height) / 2;
}
function splitSentence(phrase) {
  return phrase.split(' ');
}
function concatName(stringArray) {
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
}
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}
function verifyHighestCount(number, highest, count) {
  if (number > highest) {
    highest = number;
    count = 1;
  } else if (number === highest) {
    count += 1;
  }
  return [highest, count];
}
function highestCount(numbersArray) {
  let highestNumber = 0;
  let highestNumberRepeat = 0;
  let result = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    result = verifyHighestCount(numbersArray[index], highestNumber, highestNumberRepeat);
    [highestNumber] = result;
    highestNumberRepeat = result[1];
  }
  return highestNumberRepeat;
}
function subtrNumber(number1, number2) {
  return (number1 < number2) ? number2 - number1 : number1 - number2;
}
function compareCatAndMouse(diff1, diff2) {
  let phrase = '';
  if (diff1 < diff2) {
    phrase = 'cat1';
  }
  if (diff1 > diff2) {
    phrase = 'cat2';
  }
  if (phrase === '') {
    phrase = 'os gatos trombam e o rato foge';
  }
  return phrase;
}
function catAndMouse(mouse, cat1, cat2) {
  let diffCat1 = subtrNumber(mouse, cat1);
  let diffCat2 = subtrNumber(mouse, cat2);
  return compareCatAndMouse(diffCat1, diffCat2);
}

function divideBy(number) {
  let word = '';
  let mod5 = number % 5;
  let mod3 = number % 3;
  if (mod3 === 0) {
    word += 'fizz';
  }
  if (mod5 === 0) {
    word += 'buzz';
  }
  return word;
}
function fizzBuzz(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    arrayNumbers[index] = divideBy(arrayNumbers[index]);
    if (arrayNumbers[index] === '') {
      arrayNumbers[index] = 'bug!';
    }
    if (arrayNumbers[index] === 'fizzbuzz') {
      arrayNumbers[index] = arrayNumbers[index].replace('b', 'B');
    }
  }
  return arrayNumbers;
}

function compareLetter(letter, objectChar) {
  let newLetter = '';
  for (let indexObject in objectChar) {
    if (letter === indexObject) {
      newLetter = objectChar[indexObject];
    }
  }
  return newLetter;
}

function switchLetter(phrase, objectChar) {
  let newPhrase = '';
  for (let index = 0; index < phrase.length; index += 1) {
    let newLetter = '';
    newLetter = compareLetter(phrase[index], objectChar);
    newPhrase += (newLetter !== '') ? newLetter : phrase[index];
  }
  return newPhrase;
}

function encode(phrase) {
  let objectEncode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return switchLetter(phrase, objectEncode);
}

function decode(phrase) {
  let objectDecode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return switchLetter(phrase, objectDecode);
}

function techList(tech, name) {
  let objectTech = [];
  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    objectTech.push({
      tech: tech[index], name,
    });
  }
  if (objectTech.length === 0) {
    return 'Vazio!';
  }
  return objectTech;
}

function differentSize(sizePhone) {
  if ((sizePhone !== 11)) {
    return 'Array com tamanho incorreto.';
  }
  return '';
}
function differentNumber(number) {
  if ((number < 0) || (number > 9)) {
    return true;
  }
  return false;
}
function mostRepeated(array, number) {
  let count = 0;
  for (let indexCount = 0; indexCount < array.length; indexCount += 1) {
    if (number === array[indexCount]) {
      count += 1;
    }
  }
  return count;
}
function errorNumberAndCount(number, array) {
  let error = differentSize(array.length);
  let phrase = '';
  if (error !== '') {
    phrase = error;
  }
  if (differentNumber(number) || (mostRepeated(array, number) >= 3)) {
    phrase = 'não é possível gerar um número de telefone com esses valores';
  }
  return phrase;
}
function includeChar(number, index) {
  let phone = '';
  if (index === 0) {
    phone += '(';
  }
  if (index === 2) {
    phone += ') ';
  }
  if (index === 7) {
    phone += '-';
  }
  phone += number;
  return phone;
}
function generatePhoneNumber(arrayPhone) {
  let phrase = '';
  let error = '';
  error = errorNumberAndCount('', arrayPhone);
  if ((arrayPhone.length === 0) || (error !== '')) {
    phrase = error;
  }
  for (let index = 0; index < arrayPhone.length; index += 1) {
    phrase += includeChar(arrayPhone[index], index);
    error = errorNumberAndCount(arrayPhone[index], arrayPhone);
    if (error !== '') {
      phrase = error;
      break;
    }
  }
  return phrase;
}

function verifyTriangle(N1, N2, N3) {
  let verify = false;
  if ((N1 < Math.abs(N2 + N3)) && (N1 > Math.abs(N2 - N3))) {
    verify = true;
  }
  return verify;
}
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  let verifyA = verifyTriangle(lineA, lineB, lineC);
  let verifyB = verifyTriangle(lineB, lineC, lineA);
  let verifyC = verifyTriangle(lineC, lineA, lineB);
  if (verifyA && verifyB && verifyC) {
    result = true;
  }
  return result;
}

function hydrate(drinks) {
  let sum = 0;
  drinks = (drinks.match(/\d/g));
  for (let index = 0; index < drinks.length; index += 1) {
    const newLocal = drinks[index];
    sum += parseInt(newLocal, 10);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
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
