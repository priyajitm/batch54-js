/*

Goal

- multiple users
- multiple functionalities

Player: John
Score: 0

Player: Jane
Score: 0

Player: Tim
Score: 0

Functions:
1. Increase Score
2. Decrease Score
3. Get Total Score
4. Log In 
5. Log Out
6. Info


*/

/*
--------------------------------------------
First Solution

Problem 1 - Repeating user creation object
Problem 2 - Repeating the user functionalities
--------------------------------------------
*/

// const user1 = {
//     name: 'john',
//     score: 0,
//     increaseScore: function () {
//         this.score++
//     },
//     decreaseScore: function () {
//         this.score--
//     }
// }

// const user2 = {
//     name: 'jane',
//     score: 0,
//     increaseScore: function () {
//         this.score++
//     },
//     decreaseScore: function () {
//         this.score--
//     }
// }

// user1.increaseScore()
// user2.increaseScore()

// console.log(user1.score, user2.score)

// user1.decreaseScore()
// user2.decreaseScore()

// console.log(user1.score, user2.score)

/*
--------------------------------------------
Problem 1 - Solution
--------------------------------------------
*/

// function createUser (name, score) {
//     const newUser = {}
//     newUser.name = name
//     newUser.score = score
//     newUser.increaseScore = function () {
//         this.score++
//     }
//     return newUser
// }

// const user3 = createUser('tim', 0)

// user3.increaseScore()
// console.log(user3)

/*
--------------------------------------------
Problem 2 - Solution
--------------------------------------------
*/

// function createUser (name, score) {
//     const newUser = Object.create(userMethods)
//     newUser.name = name
//     newUser.score = score
//     return newUser
// }

// const userMethods = {
//     increaseScore: function () {
//         this.score++
//     },
//     decreaseScore: function () {
//         this.score--
//     },
// }

// const user1 = createUser ('john', 0)

// user1.increaseScore()
// console.log(user1)

/*
--------------------------------------------
Standard Way Of Writing the above logic

New Keyword
- Creates a new object
- copies the properties 
- returns that object
--------------------------------------------
*/

// function CreateUser (name, score) {
//     this.name = name
//     this.score = score
// }

// CreateUser.prototype.increaseScore = function() {
//     this.score++
// }

// CreateUser.prototype.decreaseScore = function() {
//     this.score--
// }

// const user1 = new CreateUser('john', 0)

// user1.decreaseScore()

// console.log(user1)

/*
--------------------------------------------
Class Syntactic Sugar
--------------------------------------------
*/

class User {
    constructor (name, score) {
        this.name = name
        this.score = score
    }

    increaseScore() {
        this.score++
    }
}


const user1 = new User ('john', 0)
const user2 = new User ('Jane', 10)

user1.increaseScore()

console.log(user1)
console.log(user2)