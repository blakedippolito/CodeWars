// Define a method/function that removes from a given array of integers all the values contained in a second array.

Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((item) => {
    if (!values_list.includes(item)) {
      return item;
    }
  });
};
