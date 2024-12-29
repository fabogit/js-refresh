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

// Factory function
function createTaxCalculator(tax) {
	function calculateTax(amount) {
		return amount * tax;
	}

	return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// Clojures
let userName = 'Max';

function greetUser() {
	let name = 'Anna';
	console.log('Hi ' + name);
}

let name = 'Maximilian';
userName = 'Manuel';
greetUser();

// Scope and IIFE

(function () {
	var age = 30;
	console.log(age); // 30
})();

console.log(age); // Error: "age is not defined"

// block scope
{
	const age = 30;
	console.log(age); // 30
}

console.log(age); // Error: "age is not defined"

// Recursion
function powerOf(x, n) {

	// if (n === 1) {
	// 	return x;
	// }
	// return x * powerOf(x, n - 1);

	return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2


const myself = {
	name: 'Me',
	friends: [
		{
			name: 'Friend1',
			friends: [
				{
					name: 'Name1',
					friends: [
						{
							name: 'Name2'
						},
						{
							name: 'Name3',
							friends: [
								{
									name: 'Name4'
								},
							]
						}
					]
				}
			]
		},
		{
			name: 'Friend2'
		}
	]
};

function getFriendNames(person) {
	const collectedNames = [];

	if (!person.friends) {
		return [];
	}

	for (const friend of person.friends) {
		collectedNames.push(friend.name);
		collectedNames.push(...getFriendNames(friend));
	}
	return collectedNames;
}

console.log(getFriendNames(myself));