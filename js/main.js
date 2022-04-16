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

checkCoincidences('patata', 'petate');
