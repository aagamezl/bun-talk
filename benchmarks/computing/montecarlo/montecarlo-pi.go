package main

import (
	"fmt"
	"math"
	"math/rand"
	"time"
)

func monteCarloPi(numPoints int) float64 {
	insideCircle := 0

	randSource := rand.NewSource(time.Now().UnixNano())
	rand := rand.New(randSource)

	for i := 0; i < numPoints; i++ {
		x := rand.Float64()
		y := rand.Float64()
		distance := math.Sqrt(x*x + y*y)

		if distance <= 1 {
			insideCircle++
		}
	}

	return float64(insideCircle) / float64(numPoints) * 4
}

func main() {
	numPoints := 100000000 // Adjust the number of points for accuracy vs. speed

	calculatedPi := monteCarloPi(numPoints)

	fmt.Printf("Approximation of Pi: %f\n", calculatedPi)
}
