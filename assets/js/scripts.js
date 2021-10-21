// Prototype: <h1>Hello</h1>
// grab the root element
const rootElement = document.getElementById('root');
// create an H1
const headingOneElement = document.createElement('h1');
// create text
const headingContent = document.createTextNode('Hello');
// add the text to the h1
headingOneElement.appendChild(headingContent);
// append the H1 to the root
rootElement.appendChild(headingOneElement);
// create text that says "Hello"