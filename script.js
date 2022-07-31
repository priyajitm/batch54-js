/*
Data Types -> Primitive & Reference

Primitive
1. String
2. Number
3. Boolean -> true / false
4. Undefined
5. Null
6. Symbol

Reference
1. Object
2. Array
3. Function
4. Date
5. Math
6. Regex
7. JSON

Variables

var firstname = 'priyajit'

Default value of variable is undefined

Rules:
1. Variable name can not start with number
2. variable name can not start with special characters
3. Variable name can not have spaces
4. variable name can not have special characters
5. Variable name can not have reserve keywords
6. Variable names are case-sensitive

7. start using _
8. start using $
9. can use uppercase and lowercase or whatever case you want

var 1first;
var first-name;
var !@;
var first name;
var Name
var name
var namE


String

Can be added as " " or ' '. ` `
var shopName = 'Agarwal\'s Sw\'eet'
String is always immutable
position starts with 0
position ends at length -1
position is called index

Numbers

var num = 20000
var num = 20.00


Operators

1. Arithmetic Operators
+
-
*
/
%
++
--

2. Assignment Operators

=
+=
-=
*=
/=
%=

3. comparison Operators

==
===
!=
!==
>
<
>=
<=

4. Logical Operator

||
&&
!

true && true -> true
true && false ->  false
false && true -> false
false && false -> false

true || true -> true
true || false -> true
false || true -> true
false || false -> false

Prompt
var firstName = prompt('What is your name?')

Confirm
var poll = confirm('Are we happy')


Math

Math Methods:
1. Math.abs() - returns the absolute value of a number.
2. Math.acos() - returns the arccosine of a number.
3. Math.acosh() - returns the hyperbolic arccosine of a number.
4. Math.asin() - returns the arcsine of a number.
5. Math.asinh() - returns the hyperbolic arcsine of a number.
6. Math.atan() - returns the arctangent of a number.
7. Math.atanh() - returns the hyperbolic arctangent of a number.
8. Math.atan2() - returns the arctangent of the quotient of its arguments.
9. Math.cbrt() - returns the cube root of a number.
10. Math.ceil() - returns the smallest integer greater than or equal to a number.
11. Math.clz32() - returns the number of leading zero bits in the 32-bit binary representation of a number.
12. Math.cos() - returns the cosine of a number.
13. Math.cosh() - returns the hyperbolic cosine of a number.
14. Math.exp() - returns e (the base of natural logarithms) raised to the power of a number.
15. Math.expm1() - returns e (the base of natural logarithms) raised to the power of a number, subtract 1.
16. Math.floor() - returns the largest integer less than or equal to a number.
17. Math.fround() - returns a number value that is the nearest number to the argument and, if the number is midway between two others, the even one.
18. Math.hypot() - returns the square root of the sum of squares of its arguments.
19. Math.imul() - returns the result of the 32-bit multiplication of the two parameters.
20. Math.log() - returns the natural logarithm (base e) of a number.
21. Math.log1p() - returns the natural logarithm (base e) of 1 + a number.
22. Math.log10() - returns the base 10 logarithm of a number.
23. Math.log2() - returns the base 2 logarithm of a number.
24. Math.max() - returns the largest of zero or more numbers.
25. Math.min() - returns the smallest of zero or more numbers.
26. Math.pow() - returns a number raised to a power.
27. Math.random() - returns a floating-point, pseudo-random number in the range [0, 1).
28. Math.round() - returns the value of a number rounded to the nearest integer.
29. Math.sign() - returns the sign of a number, indicating whether the number is positive, negative or zero.
30. Math.sin() - returns the sine of a number.
31. Math.sinh() - returns the hyperbolic sine of a number.
32. Math.sqrt() - returns the square root of a number.
33. Math.tan() - returns the tangent of a number.
34. Math.tanh() - returns the hyperbolic tangent of a number.
35. Math.trunc() - returns the integer part of a number, removing any fractional digits.

const moonLanding = new Date('July 20, 22 00:20:18');


var newDate = new Date()
console.log(newDate.getTime())
console.log(newDate.getDay())

Boolean

Truthy || Falsy

Falsy Value:
false
""
0
undefined
null
NaN

var isTrue = true
var isFalse = false

var something = 'jkjk'

console.log(!!something)

Conditions

if/else

if (condition) {
    // logic
} else if (condition) {
    //logic
} else {
    // logic
}

switch

switch (expression) {
    case case1:
        //logic
        break;
    case case2:
        //logic
        break;
    default:
        //logic
}

Ternary
num > 0 ? num2 > 4 ? console.log('second condition true') : console.log('second condition false') : console.log('first condition false')


Scopes:
1. Global Scope
2. Functional Scope
3. Block Scope {}

var and const and let

var:
1. it is always global scoped
2. it can be re-declared within it's scope
3. it can be declared without initialization
4. javascript hoisting will initialize it as undefined on the top of the global scope

Let:
1. it is a blocked scope
2. it can not be re-declared within it's scope
3. it can be declared without initialization

const: 
1. it is a block scoped
2. it can not be re-declared within it's scope
3. it cannot be mutated
4. it must be initialized during declaration

Array:
1. it is a collection of items
2. it is mutable
3. it is zero-based
4. it is iterable
5. it is a dynamic type
6. it is an object


let something = 'string'

const stringSplit = something.split('')
stringSplit[1] = 'p' 

stringSplit.push('s')

something = stringSplit.join('')

console.log(something)

*/


