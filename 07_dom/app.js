const h1 = document.getElementById('main-title');
h1.textContent = 'New title';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;
const ulList = body.querySelector('ul');
console.dir(ulList)

// no live update just a snapshot
// const listItemElements = document.querySelectorAll('li');
// does live update
const listItemElements = document.getElementsByTagName('li');


for (const element of listItemElements) {
	console.dir(element);
}