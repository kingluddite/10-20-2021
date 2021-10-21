// Prototype: 
// <div class="container">
//   <h1>Hello</h1>
// </div>

// <div id="root">
//   <div></div>
// </div>
// grab the root element
// window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
function toggleText() {
    if (divElement.style.display === 'none') {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
}


const rootElement = document.getElementById('root');
  
// create a DIV element
const divElement = document.createElement('div');
divElement.setAttribute('class', '.container');

// append the DIV to the root
// create an H1
const headingOneElement = document.createElement('h1');
// create text
const headingContent = document.createTextNode('Hello');
// add the text to the h1
headingOneElement.appendChild(headingContent);
// append the H1 to the div
divElement.appendChild(headingOneElement);
// append the div to the root
rootElement.appendChild(divElement);

const myBtn = document.createElement('button');
myBtn.setAttribute('class', 'my-btn');
const myButtonContent = document.createTextNode('Click me');
myBtn.appendChild(myButtonContent);
rootElement.appendChild(myBtn);


// add a listener
myBtn.addEventListener('click', toggleText);



// });



