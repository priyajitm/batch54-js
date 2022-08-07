/*
Functions

A function is a process which takes some input, which we call arguments/parameters, and returns an output based on that.

Function Purposes:

1. Mapping
Produce some output based on given input

2. Procedures
A function may be called to perform a sequence of steps.
This sequence of steps is called procedures. And in programming this procedures is also called Procedural Programming.

3. I/O
Some functions we write to communicate with other parts of the system such as network, screen, logs, storage etc.

Rules:
1. Functions are use to perform a specific task
2. Function should exactly do what it is suggested by it's name and no more.
3. If there are two different and independent actions, we will use different functions to address those.

Example:
function functionName (parameters, parameter2) {
    // function logic
    return the output
}

functionName(parameters)

1. every function should begin with the keyword function, followed by a user defined function name.
2. function name should be unique like const and let.
3. we can pass parameters/arguments inside the bracket. It can have as many arguments as you want, but more than two arguments needs to be separated by comma.
4. parameters name should be unique as well
5. function logic should be enclosed in a block scope, i.e { }. 
6. Block scope when inside function is called functional scope

Recursive Function
function printNum(num) {
   if (num > 5) {
    return;
   }
   console.log(num)
   printNum(num + 1)
}
printNum(1)

Recursion is a technique we use to solve problems by creating a function that calls itself until the function achieves the required output 

1. You need to pass a condition which will stop this function from running after a specific time.
2. Any problem that needs recursion to solve can be solved using loops

Named Function
const hello = function functionName() {
    console.log('hello')
}
creating a function as an expression and storing it in a variable.
We cannot call the function byt it's name.
We can only call that function by its variable name.

Anonymous Function
const hi = function () {
    console.log('hi')
}

IIFE - Immediately Invoked Function Expression
(function something () {
    console.log('iife')
})()

Higer Order Function

A Function that can either take another function as parameter or can return a function as output.

function sum (num1, num2) {
    return num1 + num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function calculate (func1, func2, num1, num2) {
    var func1 = function sum (num1, num2) {
        return num1 + num2
    }

    var func2 = function multiply (num1, num2) {
        return num1 * num2
    }
    var num1 = 5
    var num2 = 10

    const add = func1(num1, num2) // 15
    const multiPly = func2(num1, num2) // 50
    const res = multiPly - add // 50 - 15 = 35
    console.log(res)
}

Pure Function
A function which gives the same output every time if given the same input

function add (num, num2) {
    console.log(num + num2)
}

// Function with side effect
let val = 5
function incrementVal(num) {
    val = val + num
}

*/


