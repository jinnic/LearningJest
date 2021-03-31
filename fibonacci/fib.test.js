const fib = require('./fib')

test('fib(1) returns 0', () => {
	expect(fib(1)).toBe(0)
})

test('fib(2) returns 1', () => {
	expect(fib(2)).toBe(1)
})

test('fib(3) returns 1', () => {
	expect(fib(3)).toBe(1)
})

test('fib(4) returns 2', () => {
	expect(fib(4)).toBe(2)
})

test('fib(5) returns 3', () => {
	expect(fib(5)).toBe(3)
})

test('fib(6) returns 5', () => {
	expect(fib(6)).toBe(5)
})

test('fib(7) returns 8', () => {
	expect(fib(7)).toBe(8)
})

test('fib(8) returns 13', () => {
	expect(fib(8)).toBe(13)
})

test('fib(9) returns 21', () => {
	expect(fib(9)).toBe(21)
})

test('fib(10) returns 34', () => {
	expect(fib(10)).toBe(34)
})

test('fib(15) returns 377', () => {
	expect(fib(15)).toBe(377)
})

test('fib(20) returns 4181', () => {
	expect(fib(20)).toBe(4181)
})