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
// 	}
// 	greet() {
// 		console.log(`Hi i am ${this.name} and i am ${this.age} years old`);
// 	}
// }

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
console.log(p.__proto__);
console.log(p.__proto__ === Person.prototype); // true
console.log(p.__proto__ === Person.__proto__); // false
