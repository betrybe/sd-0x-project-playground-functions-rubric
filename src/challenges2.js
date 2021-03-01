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
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
