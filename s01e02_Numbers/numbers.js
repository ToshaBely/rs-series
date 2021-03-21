function logDigits(num) {
  function dividing(num) {
    console.log('\nLog num digits dividing by 10:');

    let digit;

    console.log(`\nNumber is ${num}`);

    while(num) {
      digit = num % 10;
      num = Math.floor(num / 10);

      console.log(`  next digit - ${digit}`);
    }
  }

  function fromString(num) {
    console.log('\nLog num digits casting to string:');

    let str = num.toString();
    let digit;

    console.log(`\nNumber is ${num}`);

    for (let i = 0; i < str.length; i++) {
      digit = str[i];
      console.log(`  next digit - ${digit}`);
    }
  }

  dividing(num);
  fromString(num);
}

function toBinaryString(num) {
  let bin = num.toString(2);

  console.log(`\n${num} as binary string is ${bin}`);
}

function sumDigit(num) {
  console.log(`\nNumber is ${num}`);

  let sum = 0;

  while(num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  console.log(`  digits sum is ${sum}`);
}

function reverse(num) {
  console.log(`\nNumber is ${num}`);

  let reversed = 0;

  while(num) {
    reversed = reversed * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  console.log(`  reversed num is ${reversed}`); // think about zero at the end of num
}

function isOddNumber(num) {
  console.log(`\nCheck is ${num} odd:`);

  let isOdd = Boolean(num % 2);
  console.log(`  div by 2 - ${isOdd}`);

  isOdd = Boolean(num & 1);
  console.log(`  logical AND with 1 - ${isOdd}`);
}

function isSimple(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log('s01e02 - Numbers\n');

let num = 65123;
// logDigits(num);

// toBinaryString(5);
// toBinaryString(13);
// toBinaryString(num);

// sumDigit(num);

// reverse(num);

// isOddNumber(num);
// isOddNumber(4);

// let simple = isSimple(num);
// console.log(`\nIs ${num} simple - ${simple}`);

// simple = isSimple(23);
// console.log(`\nIs ${23} simple - ${simple}`);

// simple = isSimple(24);
// console.log(`\nIs ${24} simple - ${simple}`);
