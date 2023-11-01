const monteCarloPi = (numPoints) => {
  let insideCircle = 0

  for (let i = 0; i < numPoints; i++) {
    const x = Math.random()
    const y = Math.random()
    const distance = Math.sqrt(x * x + y * y)

    if (distance <= 1) {
      insideCircle++
    }
  }

  const piApproximation = (insideCircle / numPoints) * 4
  return piApproximation
}

const numPoints = 1000000000 // Adjust the number of points for accuracy vs. speed

console.time("Monte Carlo Pi Calculation")
const calculatedPi = monteCarloPi(numPoints)
console.timeEnd("Monte Carlo Pi Calculation")

console.log(`Approximation of Pi: ${calculatedPi}`)
