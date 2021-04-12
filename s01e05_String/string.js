// String:
// 'A BC' -> [65, 32, 66, 67]

// .charCodeAt(idx)
// String.fromCharCode()

function showStringCharCodeList(str) {
  console.log('\nShow charcode list:');

  for(let i = 0; i < str.length; i++) {
    console.log(`  "${str[i]}" - ${str.charCodeAt(i)}`);
  }
}

function logSymbolsByCharCodeList(charCodeList) {
  console.log('\nShow symbols by charcode list:');

  charCodeList.forEach((charCode) => {
    let symbol = String.fromCharCode(charCode);

    console.log(`  [${charCode}] - "${symbol}"`);
  });
}

function isAnagram(str) {
  str = str.replace(/ /g, '');

  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }

  return true;
}

function wordCount(str) {
  console.log('\nCalculate word count');
  // check commented code:

  // let wordList = str.split(' ');
  // let wordList = str.split(/\s/);
  // let wordList = str.split(/\s+/);

  let wordList = str.trim().split(/\s+/);

  console.log(`  String "${str}" contains ${wordList.length} word(s)"`);
}

function vigenereEncode(text, key) {
  let kf = Math.ceil(text.length / key.length);
  key = key.repeat(kf);

  let codeA = 'A'.charCodeAt(0);
  let abcCount = 26;

  let result = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      result.push(text[i]);
    } else {
      let letterIdx = text.charCodeAt(i) - codeA;
      let shift = key.charCodeAt(i) - codeA;

      result.push(
        String.fromCharCode( codeA + (letterIdx + shift) % abcCount )
      );
    }
  }

  return result.join('');
}

function vigenereDecode(text, key) {
  let kf = Math.ceil(text.length / key.length);
  key = key.repeat(kf);

  let codeA = 'A'.charCodeAt(0);
  let abcCount = 26;

  let result = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      result.push(text[i]);
    } else {
      let letterIdx = text.charCodeAt(i) - codeA;
      let shift = key.charCodeAt(i) - codeA;

      result.push(
        String.fromCharCode( codeA + (letterIdx - shift + abcCount) % abcCount )
      );
    }
  }

  return result.join('');
}

console.log('s01e05 - String\n');

showStringCharCodeList('Aa BC');

logSymbolsByCharCodeList([88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);

// console.log('check "abcba" is anagram -', isAnagram('abcba'));
// console.log('check "abc" is anagram -', isAnagram('abc'));
// console.log('check "а роза азора" is anagram -', isAnagram('а роза азора'));

// wordCount(' abc  cde  fgh');


// console.log('Encoded "BBB" with key "AB" -', vigenereEncode('BBB', 'AB'));


// let key = 'JAVASCRIPT';

// let secretText = vigenereEncode('MY NAME IS ANTON', key);
// console.log(`Secret text [key="${key}"] - ${secretText}`);

// let decodedSecret = vigenereDecode(secretText, key);
// console.log(`Decoded text [key="${key}"] - ${decodedSecret}`);
