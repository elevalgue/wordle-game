'use strict';
console.log('Are you ready for a good time? :)');

// Seleccionar palabra random (de un json con un listado de palabras)
// Comprobar si las letras introducidas se corresponden con las de la palabra seleccionada

const MATCH = 'm';
const CONTAINED = 'c';
const FAIL = 'f';

function checkCoincidences(fixedWord, attemptedWord) {
  return [MATCH, FAIL, MATCH, MATCH, MATCH, FAIL];
}

function areEquals(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every(function (value, index) {
      return value === array2[index];
    })
  );
}

console.log(checkCoincidences('patata', 'petate'));
console.log(checkCoincidences('anexo', 'tapiz'));
console.log(checkCoincidences('anexo', 'rodar'));
console.log(checkCoincidences('anexo', 'joder'));
console.log(checkCoincidences('anexo', 'albeo'));
console.log(checkCoincidences('anexo', 'ameno'));
console.log(checkCoincidences('anexo', 'anexo'));

console.log('------ resultados ------');

console.log(
  areEquals(checkCoincidences('patata', 'petate'), [
    MATCH,
    FAIL,
    MATCH,
    MATCH,
    MATCH,
    FAIL,
  ])
);
console.log(checkCoincidences('anexo', 'tapiz'));
console.log(checkCoincidences('anexo', 'rodar'));
console.log(checkCoincidences('anexo', 'joder'));
console.log(checkCoincidences('anexo', 'albeo'));
console.log(checkCoincidences('anexo', 'ameno'));
console.log(checkCoincidences('anexo', 'anexo'));
