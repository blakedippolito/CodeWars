
// Task
// zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.

// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)

// Inputs should not be modified.

function zipWith(fn,a0,a1) {
    let minArr = Math.min(a0.length, a1.length)
    if (minArr===0) return []
    let newMap = a0.map((item, index, arr)=> {
      return fn(item, a1[index])
    })
    console.log(fn, a0, a1)
    return newMap.slice(0, minArr)
  }