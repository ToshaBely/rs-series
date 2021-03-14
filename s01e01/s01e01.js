// Array structure:
// [ elem_1, elem_2, elem_3, ..., elem_n ]

// MDN documentation about Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

function arrayCreation() {
  let arrayWithInitSize = new Array(4);
  let arrayWithOneValue = new Array('5');
  let arrayWithPreset = new Array(5, 6);
  let arrayWithInitValue = Array.of(4);
  let arrayWithInitValues = Array.of(4, 5, 6);
  let simpleWayArray = ['a', 'b', 'c']; // preferrable way

  console.log('\nArray creation:');
  console.log('arrayWithInitSize:', arrayWithInitSize);
  console.log('arrayWithOneValue:', arrayWithOneValue);
  console.log('arrayWithPreset:', arrayWithPreset);
  console.log('arrayWithInitValue:', arrayWithInitValue);
  console.log('arrayWithInitValues:', arrayWithInitValues);
  console.log('simpleWayArray:', simpleWayArray);
}

function arrayBypass() {
  function logEachElement(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`[elem with index ${i}] is ${array[i]}`);
    }
  }

  function findSum(array) {
    logEachElement(array);

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    console.log(`sum = ${sum}`);
  }

  function findMin(array) {
    let min = array.length ? array[0] : 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }

    console.log(`min is ${min}`);
  }

  function findAng(array) {
    logEachElement(array);

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    let avg = array.length ? sum / array.length : 0;

    console.log(`avg = ${avg}`);
  }

  console.log('\nArray bypass:');

  let array = [21, 22, 23, 24, 25, 26, 27];
  logEachElement(array);

  // array = [5, 1, 10, 23];
  // findSum(array);
  // findMin(array);
  // findAng(array);
}

console.log('s01e01 - Array\n');
arrayCreation();
// arrayBypass();
