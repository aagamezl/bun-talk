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

const matrixSize = 1_000 // Adjust the matrix size as needed
const matrixA = []
const matrixB = []

for (let i = 0; i < matrixSize; i++) {
  matrixA.push(Array.from({ length: matrixSize }, () => Math.random()))
  matrixB.push(Array.from({ length: matrixSize }, () => Math.random()))
}

console.time("Matrix Multiplication")
matrixMultiplication(matrixA, matrixB)
console.timeEnd("Matrix Multiplication")

// console.log("Result Matrix:", resultMatrix)
