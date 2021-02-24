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



module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
