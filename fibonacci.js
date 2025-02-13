// Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13
// Sequence Patterns: +1 0 +1 +1 +1 +2 +3 +5
// Sequence Equation: (n - 1) + (n - 2)

// Fibonacci Iteration Function

function fibonacciIteration(endInteger) {
    let fibonacciSequence = [0, 1];

    if (endInteger < 2) {
        return [];
    } else if (endInteger === 2) {
        return 0;
    } else {
        for (let startInteger = 2; startInteger < endInteger; startInteger++) {
            fibonacciSequence[startInteger] = fibonacciSequence[startInteger - 1] + fibonacciSequence[startInteger - 2];
        }
        return fibonacciSequence;
    }
}

// Fibonacci Recursive Funciton

function fibonacciRecursive(n) {

    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

console.log(fibonacciRecursive(4));