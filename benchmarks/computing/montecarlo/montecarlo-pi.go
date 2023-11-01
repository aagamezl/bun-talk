package main

import (
	"fmt"
	"math/rand"
	"time"
)

func monteCarloPi(numPoints int) float64 {
	insideCircle := 0

	rand.Seed(time.Now().UnixNano())

	for i := 0; i < numPoints; i++ {
		x := rand.Float64()
		y := rand.Float64()
		distance := x*x + y*y

		if distance <= 1 {
			insideCircle++
		}
	}

	piApproximation := float64(insideCircle) / float64(numPoints) * 4
	return piApproximation
}

func main() {
	numPoints := 1000000000 // Adjust the number of points for accuracy vs. speed

	calculatedPi := monteCarloPi(numPoints)

	fmt.Printf("Approximation of Pi: %f\n", calculatedPi)
}
