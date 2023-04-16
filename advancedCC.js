// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()
// returns 1 2

// function currying
// function sum(a, b, c) {
//     return a + b + c
// }
// function curry(fn) {
//     return function(a) {
//         return function(b) {
//             return function(c) {
//                 return fn(a, b, c)
//             }
//         }
//     }
// }
// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5)) // this can be done 1 step at a time

//prototype
// function Person(fName, lName) {
//     this.firstName = fName
//     this.lastName =lName
// }
// // const person1 = new Person('Bruce', 'Wayne')
// // const person2 = new Person('Clark', 'Kent')
// // person1.getFullName = function() {
// //     return this.firstName + ' ' + this.lastName
// // }
// // console.log(person1.getFullName()) // this only works for person1
// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }
// // console.log(person2.getFullName())

// // Prototypal Inheritance
// function SuperHero(fName, lName) {
//     // this = {}  // this in person refers to this in superhero
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }
// SuperHero.prototype.fightCrime = function() {
//     console.log('Fighting crime')
// }
// SuperHero.prototype = Object.create(Person.prototype) // links superhero prototype to person prototype for getfullname
// const batman = new SuperHero('Bruce', 'Wayne')
// SuperHero.prototype.constructor = SuperHero // so JS doesn't think superhero is created from person
// console.log(batman.getFullName())

// Classes
// Classes are not like OOP. They just make prototypal inheritance cleaner.
// class Person {
//     constructor(fName, lName) {
//         this.firstName = fName
//         this.lastName =lName
//     }

//     sayMyName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }
// const classP1 = new Person('Bruce', 'Wayne')
// console.log(classP1.sayMyName())
// class SuperHero extends Person {
//     constructor(fName, lName) {
//         super(fName, lName)
//         this.isSuperHero = true
//     }
//     fightCrime() {
//         console.log('Fighting crime.')
//     }
// }
// const batman = new SuperHero('Bruce', 'Wayne')
// console.log(batman.sayMyName())

// Iterables and Iterators
// const obj = {
//     [Symbol.iterator]: function() {
//         let step = 0
//         const iterator = {
//             next: function() {
//                 step++
//                 if(step === 1) {
//                     return {value: 'Hello', done: false}
//                 }
//                 else if (step === 2){
//                     return {value: 'World', done: false}
//                 }
//                 return {value: undefined, done: true}
//             }
//         }
//         return iterator
//     }
// }
// for(const word of obj) {
//     console.log(word)
// }

// Generators
// function normalFunction() {}
// function* generatorFunction() {
//     yield 'Hello'
//     yield 'World'
// }
// const generatorObject = generatorFunction()
// for(const word of generatorObject) {
//     console.log(word)
// }