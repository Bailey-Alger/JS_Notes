// Timeouts and Intervals
// setTimeout() executes a block of code after a specified time has elapsed
// setInterval() repeatedly runs code
// These are not features of JS, but of the browser

// Callbacks
// A function that is passed as an argument to another function

// // Promises
// // Pending, Fullfilled, or Rejected
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Rejected lole')
//     }, 5000)
// })
// const onRejection = () => {
//     console.log('Rejected')
// }
// // after fullfillment .then() is executed
// // after rejection .catch() is executed
// promise.catch(onRejection)
// // Promise.all() Promise.allSettled Promise.race()

// async await
// async functions always return a promise
async function greet() { return "Hello" }
// returns Promise {<fulfilled>: "Hello"}
greet().then((value) => console.log(value))
// await can be used to pause code until promise settles