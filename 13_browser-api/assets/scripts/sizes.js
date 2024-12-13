const mainBox = document.getElementById('main-box');
// element x,y position in the window
console.dir(mainBox.getBoundingClientRect());

// outer pos
console.log(`Outer Top: ${mainBox.offsetTop}, Left: ${mainBox.offsetLeft}`);

// inner pos
console.log(`Inner Top: ${mainBox.clientTop}, Left: ${mainBox.clientLeft}`);

// dimensions
console.log(`Box width: ${mainBox.offsetWidth}, box height: ${mainBox.offsetHeight}`);
console.log(`Client box width: ${mainBox.clientWidth}, box height: ${mainBox.clientHeight}`);

// browser sizes
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

// scroll
console.log(mainBox.scrollHeight);
console.log(mainBox.scrollTop);
