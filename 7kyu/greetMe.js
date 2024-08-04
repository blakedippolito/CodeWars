// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

var greet = function (name) {
  name = name.toLowerCase();
  return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!`;
};

//riley -> Hello Riley!