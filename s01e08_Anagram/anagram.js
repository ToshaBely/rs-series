function checkAnagrams(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  let leftMap = {};
  for (let i = 0; i < left.length; i++) {
    let symbol = left[i];
    leftMap[symbol] = (leftMap[symbol] || 0) + 1;
  }

  for (let i = 0; i < right.length; i++) {
    let symbol = right[i];

    if (!leftMap[symbol]) {
      // if there is no symbol or count is equal 0
      return false;
    }

    leftMap[symbol] = leftMap[symbol] - 1;
  }

  return true;
}

console.log('s01e08 - Anagram');

console.log('  abc cba', checkAnagrams('abc', 'cba'));
console.log('  abc cbaa', checkAnagrams('abc', 'cbaa'));
console.log('  aabc cbaa', checkAnagrams('aabc', 'cbaa'));
console.log('  abcz abcx', checkAnagrams('abcz', 'abcx'));
console.log('  aabc cbaa', checkAnagrams('aabc', 'cbaa'));
