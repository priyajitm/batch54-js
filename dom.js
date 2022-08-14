/*

DOM - Document Object Model

Tree of nodes

select element
1. get element by id
2. get element by class
3. get element by element name
4. get element using query

const classSelector = document.getElementsByClassName('test')
const idSelector = document.getElementById('new')
const nameSelector = document.getElementsByTagName('p')
const generalSelector = document.querySelector('p')
const generalSelector2 = document.querySelectorAll('#new')

*/

// Selecting the Parent Element
const parentDiv = document.querySelector('.container')

// Selecting the First Child of Parent
const firstChild = parentDiv.children[0]

// Selecting the first sibling of firstchild
const firstSibling = firstChild.nextElementSibling

// Selecting the previous sibling
const previousSibling = firstSibling.previousElementSibling

// Create an element
const p = document.createElement('p')

// Adding content to created element
p.innerHTML = 'this is another paragraph'

// Add created element to the dom
parentDiv.appendChild(p)

// Add another element in the middle
const h4 = document.createElement('h4')
h4.innerText = 'I am a H4'
const targetNode = document.querySelector('h4')
parentDiv.insertBefore(h4, targetNode)

// Delete an element
const targetNodeNew = document.querySelector('h4')
parentDiv.removeChild(targetNodeNew)

// Add/Remove Class Property in element
const h2 = document.querySelector('h2')
h2.classList.add('blue')
h2.classList.remove('blue')

const button = document.querySelector('button')
button.addEventListener('click', changeColor)

function changeColor() {
    const targetNodeNew = document.querySelector('h4')
    parentDiv.removeChild(targetNodeNew) 
}

const yellowBox = document.querySelector('.yellow')
const brown = document.querySelector('.brown')
const green = document.querySelector('.green')

yellowBox.addEventListener('click', consoleMe)
brown.addEventListener('click', consoleMe)
green.addEventListener('click', consoleMe)

function consoleMe(e) {
    e.stopPropagation()
    console.log('clicked')
}

function bodyClick() {
    console.log('body Clicked')
}