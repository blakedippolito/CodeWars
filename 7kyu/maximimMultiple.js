// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

function maxMultiple(divisor, bound) {
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

// 2,7 returns 6