const h1 = document.getElementById('main-title');
h1.textContent = 'New title';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;
const ulList = body.querySelector('ul');
console.dir(ulList);

// Childrens
const listNodes = ulList.childNodes; // text nodes spaces and line break
const secondListElement = ulList.children[1]; // tagged html elements

const firstNode = ulList.firstChild;
const firstElem = ulList.firstElementChild;

const lastNode = ulList.lastChild;
const lastElem = ulList.lastElementChild;

// Parents
const liFirst = document.querySelector('li:first-of-type');
liFirst.parentNode; // quite useless
liFirst.parentElement;

// any ancestor
liFirst.closest('body');

// no live update just a snapshot
// const listItemElements = document.querySelectorAll('li');
// does live update
const listItemElements = document.getElementsByTagName('li');

for (const element of listItemElements) {
	console.dir(element);
}