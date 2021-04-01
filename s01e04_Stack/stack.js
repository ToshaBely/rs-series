// Stack structure:
// LIFO - Last In First Out

// ------------------------
// |  1  2  3  4 ...   <->
// ------------------------

// Base operations: PUSH / POP / TOP / SIZE / IS_EMPTY

function stackOnArrayExample() {
  console.log('Stack on Array example:');

  let stack = [];

  console.log('  Push fake call stack:');

  console.log('    push Outer');
  stack.push('Outer');

  console.log('    push Inner');
  stack.push('Inner');

  console.log('    push Super-Inner');
  stack.push('Super-Inner');

  console.log('    push Super-Super-Inner');
  stack.push('Super-Super-Inner');

  console.log('  Execute fake call stack:');

  while(stack.length) {
    let operation = stack.pop();

    console.log('    execute -', operation);
  }
}

function bracketsIssue() {
  console.log('Brackets issue:');

  const OPEN_BRACKETS = ['(', '{'];
  const BRACKETS_PAIR = {
    [')']: '(',
    ['}']: '{',
  };

  function isBracketsOk(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      
      if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];

        if (BRACKETS_PAIR[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  console.log('  check case - ()(()()) -', isBracketsOk('()(()())'));
  console.log('  check case - ())(() -', isBracketsOk('())(()'));
  console.log('  check case - (){}({}()) -', isBracketsOk('(){}({}())'));
  console.log('  check case - (}({}()) -', isBracketsOk('(}({}())'));
  console.log('  check case - ((()) -', isBracketsOk('((())'));
}

console.log('s01e04 - Stack\n');

stackOnArrayExample();

bracketsIssue();

// Brackets examples:
// ()(()()) - OK
// ())(() - WRONG

// (){}({}()) - OK
// (}({}()) - WRONG
