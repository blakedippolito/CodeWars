// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata

function swap(string) {
  let vowels = "aeiou";
  return string
    .split("")
    .map((item) => (vowels.includes(item) ? item.toUpperCase() : item))
    .join("");
}
