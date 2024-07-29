// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x){
    const alphabetScores = {};
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    for (let i = 0; i < alphabet.length; i++) {
      alphabetScores[alphabet[i]] = i + 1;
    }
    
    let xMap = x.split(' ')
    let results = []
    for (let y of xMap) {
      results.push(y.split('').map(item=>alphabetScores[item]).reduce((acc,c)=>acc+c))
    }
    return(xMap[results.indexOf(Math.max(...results))])
  
  }

  //'man i need a taxi up to ubud' returns 'taxi'