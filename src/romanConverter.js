const romanDictionary = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  
  const isValidIndex = (index, vector) => {
    return index < (vector.length - 1);
  }
  
  const isCurrentNumberLessThanNextNumber = (index, value) => {
    const nextRomanNumber = isValidIndex(index, value) ? 
            romanDictionary[value.charAt(index + 1)] : 0;
    return romanDictionary[value.charAt(index)] < nextRomanNumber;
  }
  
  const romanToDecimal = value => {
    let sum = 0;
    
    [...value].forEach((item, index) => {
      sum += isCurrentNumberLessThanNextNumber(index, value) ?
        (romanDictionary[item] * (-1)) : romanDictionary[item];
    })
  
    return sum;
  }
  
  
  module.exports = {
    romanToDecimal
  }