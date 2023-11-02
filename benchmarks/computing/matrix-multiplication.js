const matrixMultiplication = (matrix1, matrix2) => {
  const result = new Array(matrix1.length).fill(0).map(() => new Array(matrix2[0].length).fill(0))

  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix2[0].length; j++) {
      for (let k = 0; k < matrix2.length; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j]
      }
    }
  }

  return result
}

function createEmptyMatrix(rows, cols) {
  let result = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(0);
    }
    result.push(row);
  }
  return result;
}

function generateRandomMatrix(matrixSize) {
  const matrixA = new Array(matrixSize);

  for (let i = 0; i < matrixSize; i++) {
    matrixA[i] = new Array(matrixSize);

    for (let j = 0; j < matrixSize; j++) {
      matrixA[i][j] = Math.random();
    }
  }

  return matrixA;
}

const matrixSize = 700 // Adjust the matrix size as needed
const matrixA = generateRandomMatrix(matrixSize)
const matrixB = generateRandomMatrix(matrixSize)

// const matrixA = []
// const matrixB = []

// for (let i = 0; i < matrixSize; i++) {
//   matrixA.push(Array.from({ length: matrixSize }, () => Math.random()))
//   matrixB.push(Array.from({ length: matrixSize }, () => Math.random()))
// }

matrixMultiplication(matrixA, matrixB)
