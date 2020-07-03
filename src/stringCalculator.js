const ERROR_MESSAGE = 'negatives not allowed';

const sumOfNumbers = myString => {
  let sum = 0;
  let negativeNumbers = '';
  if(myString !== ''){
    const numbers = getNumbersFromString(myString); 
    numbers.forEach(item => {
      let currentNumber = parseInt(item);
      if(currentNumber < 0)
        negativeNumbers += negativeNumbers == '' ? item : `,${item}`;
      else
        sum += currentNumber >= 1000 ? 0 : currentNumber;
    });
  }
  return negativeNumbers ? `${ERROR_MESSAGE}: ${negativeNumbers}` : sum;
}

const getNumbersFromString = myString => {
  let newDelimiter = '';
  if(myString.slice(0,2) == '//'){
    newDelimiter = `${myString.charAt(2)}`;
    myString = myString.slice(4);
  }
  return myString.split(new RegExp(`[,${newDelimiter}\n]`, 'g'));
}

module.exports = {
  sumOfNumbers
}