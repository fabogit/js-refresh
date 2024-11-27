let person = {
	name: 'Jesus',
	age: 33,
	hobbies: ['Preach', 'Wine'],
	greet: function () {
		alert('Hi there!');
	}
};

// Adding, Modifying & Deleting Properties

// person.age = 31;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

console.log(person);