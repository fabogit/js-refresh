// class AgedPerson {
// 	printAge() {
// 		console.log(this.age);
// 	}
// }

// class Person extends AgedPerson {
// 	name = 'Jesus';
// 	constructor() {
// 		super();
// 		this.age = 33;
// // Will assign to individual instances and 'recreate' the object
// // this.method = function(){...this refers to what called the method}
// // or this.method = () => {this will refer to the istance}
// 	}
// // Will assign the method to Person prototype and shared across all instances
// 	greet() {
// 		console.log(`Hi i am ${this.name} and i am ${this.age} years old`);
// 	}
// }

// Constructior function
function Person() {
	this.age = 33;
	this.name = 'Jesus';
	this.greet = function () {
		console.log(
			`Hi i am ${this.name} and i am ${this.age} years old`
		);
	};
}

// __proto_ on any object
// prototype on functions
Person.prototype.printAge = function () {
	console.log(this.age);
};

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.dir(p.__proto__);
// Person.__proto__ points at the 'prototype' object
// Person.prototype at the prototype object that will be assigned as prototype to objects created based on Person
console.log(p.__proto__ === Person.prototype); // true
console.log(p.__proto__ === Person.__proto__); // false
// default prototype
console.dir(Object.prototype);

// Set and Get
const course = {
	// new Object()
	title: 'JavaScript Guide',
	rating: 5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
	// ...Object.getPrototypeOf(course),
	printRating: function () {
		console.log(`${this.rating}/5`);
	}
});

const student = Object.create({
	printProgress: function () {
		console.log(this.progress);
	}
}, {
	name: {
		configurable: true,
		enumerable: true,
		value: 'Max',
		writable: true
	}
});

// student.name = 'Max';

Object.defineProperty(student, 'progress', {
	configurable: true,
	enumerable: true,
	value: 0.8,
	writable: false
});

student.printProgress();

console.log(student);

course.printRating();
