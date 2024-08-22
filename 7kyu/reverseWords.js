// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.



function reverseWords(str) {
    str = str.split(' ')
    let result = []
    for (let x of str) {
      x = x.split('').reverse().join('')
      result.push(x)
    }
    return result.join(' ')
   }