
// The Fibonacci sequence is a list of numbers starting at 0 and 1. The next number in the sequence is found by adding up the two highest previous numbers.
// 0 + 1 = 1 (0, 1, 1,)
// 1 + 1 = 2 (0, 1, 1, 2)
// 1 + 2 = 3 (0, 1, 1, 2, 3)
// 2 + 3 = 5 (0, 1, 1, 2, 3, 5)

// Create a function that takes in a number (n) and return the n-th Fibonacci Number.
// fib(1) =>  1st Fibonacci number is 0 =>    returns 0
// fib(5) =>  5th Fibonacci number is 3 =>    returns 3
// fib(11) => 11th Fibonacci number is 55 =>  returns 55

// n will always be an interger, and n > 0

function fib(n) {
	if (n <= 1) return 0;
  if (n === 2) return 1;
   return fib(n - 1) + fib(n - 2);
}

// To test code, type the below command into your terminal
// npm test -- fib  /or/ jest fib 


module.exports = fib