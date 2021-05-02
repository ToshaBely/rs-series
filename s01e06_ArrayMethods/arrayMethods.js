function arrayHasSome() {
  console.log('\nHas Some:');

  function hasSome(array, checkFn) {
    for (let i = 0; i < array.length; i++) {
      if ( checkFn(array[i]) ) {
        return true;
      }
    }

    return false;
  }

  let arr = [1, 2, 4, 8, 16];

  console.log('  array:', arr, '\n');

  console.log('  has > 5:', hasSome( arr, (item) => item > 5 ));
  console.log('  has > 20:', hasSome( arr, (item) => item > 20 ));

  // console.log('  has > 5 .some:', arr.some( (item) => item > 5 ));
  // console.log('  has > 20 .some:', arr.some( (item) => item > 20 ));
}

function arrayIsEvery() {
  console.log('\nIs Every:');

  function isEvery(array, checkFn) {
    for (let i = 0; i < array.length; i++) {
      if ( !checkFn(array[i]) ) {
        return false;
      }
    }

    return true;
  }

  let arr = [1, 2, 4, 8, 16];

  console.log('  array:', arr, '\n');

  console.log('  is every < 5:', isEvery( arr, (item) => item < 5 ));
  console.log('  is every < 100:', isEvery( arr, (item) => item < 100 ));

  // console.log('  is every < 5 .every:', arr.every( (item) => item < 5 ));
  // console.log('  is every < 100 .every:', arr.every( (item) => item < 100 ));
}

function arrayTransform() {
  console.log('\nTransform:');

  function transform(array, transformer) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
      result.push(
        transformer(array[i])
      );
    }

    return result;
  }

  let arr = [1, 2, 4, 8, 16];

  console.log('  before:', arr, '\n');

  let transformed = transform( arr, (item) => item * 10 );
  console.log('  after transformation:', transformed);

  // let res = arr.map( (item) => item * 10 );
  // console.log('  after .map:', res);
}

function arrayFilter() {
  console.log('\nFilter:');

  function filter(array, checkFn) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
      if ( checkFn(array[i]) ) {
        result.push(array[i]);
      }
    }

    return result;
  }

  let arr = [1, 2, 4, 8, 16];

  console.log('  before:', arr, '\n');

  let filtered = filter( arr, (item) => item > 5 );
  console.log('  after filtration:', filtered);

  // let res = arr.filter( (item) => item > 5 );
  // console.log('  after .filter:', res);
}


console.log('s01e06 - Array Methods');
arrayHasSome();
// arrayIsEvery();
// arrayTransform();
// arrayFilter();
