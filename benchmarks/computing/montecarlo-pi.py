import random
import math

def monteCarloPi(numPoints):
    insideCircle = 0

    for i in range(numPoints):
        x = random.random()
        y = random.random()
        distance = math.sqrt(x * x + y * y)

        if distance <= 1:
            insideCircle += 1

    piApproximation = (insideCircle / numPoints) * 4
    return piApproximation

result = monteCarloPi(1000000000)
print("Approximated value of pi:", result)
