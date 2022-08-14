/* 
Object

const someObj = {
    firstName: 'Priyajit',
    lastName: 'Mukherjee',
}

*/
// Creating an Object

const someVal = {}

const someObj = {
    firstName: 'Priyajit',
    'last name': 'Mukherjee',
    hobbies: ['coding', 'writing', 'eating'],
    greet: function () {console.log('Hello Everyone')},
    'coding languages': {
        'javascript' : true,
        'React': true,
        'java': false,
        'python': true,
    }
}

// Access value of an object
console.log(someObj.firstName)
console.log(someObj['last name'])
someObj.greet()

// Add values to object
someObj.age = 38
someObj.hobbies.push('sleeping')

// someObj.hobbies.map(x => console.log(x))
console.log(someObj["coding languages"].java)


// Convert object keys into an array
const arrayOfKeys = Object.keys(someObj)

// Convert Object values into an array
const arrayOfValues = Object.values(someObj)

// Two different method to check if a property exists in an object. Returns boolean.
console.log(someObj.hasOwnProperty('name'))
console.log(Object.hasOwn(someObj, 'name'))


