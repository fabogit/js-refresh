// CREATE

const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = Array(5, 2);
console.log(moreNumbers);

// slow performance
const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// Or just declare it
const declare = ['Cooking', 'Sports'];
const personalData = [33, 'Jesus', { moreDetail: [] }];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for (const data of analyticsData) {
	for (const dataPoint of data) {
		console.log(dataPoint);
	}
}

console.log(personalData[1]);

// ADD & REMOVE

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

// SPLICE

hobbies[1] = 'Coding';
// hobbies[5] = 'Reading'; // rarely used
console.log(hobbies, hobbies[4]);

hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(hobbies);

// APPENDING ARRAYS

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(2);
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);

// INDEX

console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));
console.log(testResults.includes(1.5)); // true/false


const personData = [{ name: 'Max' }, { name: 'Manuel' }];
console.log(personData.indexOf({ name: 'Manuel' }));

//  FIND / FINDINDEX
const manuel = personData.find((person, idx, persons) => {
	return person.name === 'Manuel';
});

manuel.name = 'Anna';

console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
	return person.name === 'Max';
});

console.log(maxIndex);

// FOR EACH AND MAP

const pricesEach = [10.99, 5.99, 3.99, 6.59];
const taxEach = 0.19;
const taxAdjustedPricesEach = [];

// for (const price of pricesEach) {
//   taxAdjustedPricesEach.push(price * (1 + taxEach));
// }

pricesEach.forEach((price, idx, prices) => {
	const priceObj = { index: idx, taxAdjPrice: price * (1 + taxEach) };
	taxAdjustedPricesEach.push(priceObj);
});

console.log(taxAdjustedPricesEach);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
	const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
	return priceObj;
});

console.log(pricesEach, taxAdjustedPrices);

// SORT

const sortedPrices = prices.sort((a, b) => {
	if (a > b) {
		return -1;
	} else if (a === b) {
		return 0;
	} else {
		return 1;
	}
});
// console.log(sortedPrices.reverse());
console.log(sortedPrices); // .reverse());

// FILTER
const filteredArray = prices.filter(p => p > 6);
console.log(filteredArray);

// REDUCE

// prices.forEach((price) => {
//   sum += price
// });

// console.log(sum);

const sum = prices.reduce(
	(prevValue, curValue,/* curIndex, array */) => {
		return prevValue + curValue;
	}, 0
);

console.log(sum);

// SPLIT & JOIN

const data = 'new york;10.99;2000';

const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragements = ['Jon', 'Doe'];
const name = nameFragements.join(' ');
console.log(name);