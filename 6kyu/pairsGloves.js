// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

function numberOfPairs(gloves)
{
  let colorCount = {}
  let pairs = 0

  let filt = gloves.forEach((item,index) => {
    colorCount[item] = (colorCount[item]|| 0)+1
    })
  
  for (let color in colorCount) {
    pairs += Math.floor(colorCount[color]/2)
    
  }
  return pairs
}