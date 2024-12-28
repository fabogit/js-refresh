// pure function, given an given input the output is always the same/no side effects
function add(num1, num2) {
	return num1 + num2;
}
console.log(add(1 + 5));

function randomAdd(num1) {
	// not a pure function
	const random = Math.random();
	return num1 + random;
}
console.log(randomAdd(5));

// side effects
const previousResult = 0;
function addMore(n1, n2) {
	const sum = num1 + num2;
	previousResult = sum;
	return sum;
}

const numbers = [1, 2];
function printArray(arr) {
	arr.push(4);
	console.log(arr);
}
console.log(printArray(numbers));
