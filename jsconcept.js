

// function sayHello(val) {
//     return function (val2) {
//         return `Hello ${val} ${val2}`;
//     }
// }

// const firstName = sayHello('John');
// const lastName = sayHello;

// console.log(typeof firstName)

// console.log(firstName('Doe'));
// console.log(lastName);

// const someObj = {
//     name: 'John',
//     age: 30,
//     sayHello: function (val) {
//         console.log(this === someObj);
//     }
// }

// const aFunc = function () {
//     console.log('normal function', this);
// }

// const functionName = () => {
//     console.log('arrow function',this);
// }

// aFunc()
// functionName()
// console.log(this)


/*

This Keyword
1. function gets this property by default
2. in global scope, it will point to global/window object
3. in object method, this refers to the parent object from where the method is getting executed.

*/

// const someObj = {
//     firstName: 'John',
//     hello: function () {
//         return this.firstName
//     }
// }

// const greet  = function (val, val2) {
//     console.log(val + ' ' + this.hello() + '!' + ' ' + val2)
// }

// // const hi = greet.bind(someObj)

// greet(someObj, 'hello', 'How are you?')


function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
