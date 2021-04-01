// Matrix structure:
//
// #      0  1  2
//
// 0   [ [1, 2, 3],
// 1     [4, 5, 6],
// 2     [7, 8, 9] ]
// 

function logEachMatrixItem(matrix) {
  console.log('\nLog each matrix item:');

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`  item {${i}, ${j}} - ${matrix[i][j]}`);
    }
  }
}

function showMatrix(matrix) {
  console.log('\nShow matrix:');

  for (let i = 0; i < matrix.length; i++) {
    console.log( matrix[i].join(' ') );
  }
}

function showSumByRow(matrix) {
  console.log('\nShow sum by row:');

  let sumResults = [];
  let sum;

  for (let i = 0; i < matrix.length; i++) {
    sum = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }

    sumResults.push(sum);
  }

  console.log('  result -', sumResults);
}

function findColumnsWithZero(matrix) {
  // consider that we have matrix with some data

  console.log('\nFind columns with 0:');

  let columnsWithZeroIdx = [];

  let columnCount = matrix[0].length;

  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        columnsWithZeroIdx.push(i);
        break;
      }
    }
  }

  console.log('  result indexes -', columnsWithZeroIdx);
}

function snakeBypass(matrix) {
  console.log('\nSnake bypass:');

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 === 0 
        ? j
        : (matrix[i].length - j - 1);

      console.log( matrix[i][columnIdx] );
    }
  }
}

function logMainDiag(matrix) {
  console.log('\nMain diag:');

  for (let i = 0; i < matrix.length; i++) {
    console.log( matrix[i][i] );
  }
}

function logSideDiag(matrix) {
  console.log('\nSide diag:');

  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    console.log( matrix[i][n - i - 1] );
  }
}

function showBottomMainTriangle(matrix) {
  console.log('\nBottom main triangle:');

  let row;

  for (let i = 0; i < matrix.length; i++) {
    row = [];

    for (let j = 0; j <= i; j++) {
      // action
      row.push( matrix[i][j] );
    }

    console.log( row.join(' ') );
  }
}

console.log('s01e03 - Matrix\n');

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 3, 6, 9],
  [6, 8, 0, 2],
];

// logEachMatrixItem(matrix);
// showMatrix(matrix);

// showSumByRow(matrix);

// findColumnsWithZero(matrix);

// let smallMatrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// showMatrix(smallMatrix);
// snakeBypass(smallMatrix);

// logMainDiag(matrix);
// logSideDiag(matrix);

// showMatrix(matrix);
// showBottomMainTriangle(matrix);
