// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .

function automorphic(n){
    let str = String(n)
    return String(Math.pow(String(n), 2)).endsWith(str) ? 'Automorphic' : 'Not!!'
  }

console.log(automorphic(6)) // returns Automorphic
console.log(automorphic(4)) // returns Not!!
