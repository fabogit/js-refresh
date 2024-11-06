const h1 = document.getElementById('main-title');
h1.textContent = 'New title';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;
const ul = body.querySelector('ul');
// same as liFirst.parentElement
console.dir(ul);

// Childrens
const listNodes = ul.childNodes; // text nodes spaces and line break
const secondListElement = ul.children[1]; // tagged html elements

const firstNode = ul.firstChild;
const firstElem = ul.firstElementChild;

const lastNode = ul.lastChild;
const lastElem = ul.lastElementChild;

// Parents
const liFirst = document.querySelector('li:first-of-type');
liFirst.parentNode; // quite useless
liFirst.parentElement;

// any ancestor element
liFirst.closest('body');


// Traversing siblings
ul.previousSibling; // any previous text node
ul.previousElementSibling; // previous element

ul.nextSibling; // any next text node
ul.nextElementSibling; // next element

// no live update just a snapshot
// const listItemElements = document.querySelectorAll('li');
// does live update
const listItemElements = document.getElementsByTagName('li');

for (const element of listItemElements) {
	console.dir(element);
}