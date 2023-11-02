package main

import (
	"math/rand"
	"time"
)

func matrixMultiplication(matrix1, matrix2 [][]float64) [][]float64 {
	rows1 := len(matrix1)
	cols1 := len(matrix1[0])
	cols2 := len(matrix2[0])

	result := make([][]float64, rows1)
	for i := 0; i < rows1; i++ {
		result[i] = make([]float64, cols2)
	}

	for i := 0; i < rows1; i++ {
		for j := 0; j < cols2; j++ {
			for k := 0; k < cols1; k++ {
				result[i][j] += matrix1[i][k] * matrix2[k][j]
			}
		}
	}

	return result
}

func createEmptyMatrix(rows, cols int) [][]float64 {
	result := make([][]float64, rows)
	for i := 0; i < rows; i++ {
		result[i] = make([]float64, cols)
	}
	return result
}

func generateRandomMatrix(matrixSize int) [][]float64 {
	randSource := rand.NewSource(time.Now().UnixNano())
	rand := rand.New(randSource)
	matrix := createEmptyMatrix(matrixSize, matrixSize)
	for i := 0; i < matrixSize; i++ {
		for j := 0; j < matrixSize; j++ {
			matrix[i][j] = rand.Float64()
		}
	}
	return matrix
}

func main() {
	matrixSize := 700 // Adjust the matrix size as needed
	matrixA := generateRandomMatrix(matrixSize)
	matrixB := generateRandomMatrix(matrixSize)

	matrixMultiplication(matrixA, matrixB)
}
