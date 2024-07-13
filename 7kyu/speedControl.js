// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:
// With the above data your function gps(s, x) should return 74

// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

//  (3600 * delta_distance) / s.

// Happy coding!

function gps(x,s) {
  if (x.length <= 1) {
    return 0;
  }

  let result = [];
  const mph = (delta) => (3600 * delta) / s;
  for (let i = 0; i < x.length - 1; i++) {
    let delta = x[i + 1] - x[i];
    result.push(mph(delta));
  }
  return Math.floor(Math.max(...result));
}

console.log(gps([0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25], 15));
