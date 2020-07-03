const ERROR_MESSAGE = 'negatives not allowed';

const sumOfNumbers = myString => {
  let sum = 0;
  let negativeNumbers = '';
  if(myString !== ''){;
    let number = getStringNumber(myString); 
    number.forEach(item => {
      let currentNumber = parseInt(item);
      if(currentNumber < 0){
        negativeNumbers += negativeNumbers == '' ? item : `,${item}`
      }
      else
        sum += currentNumber >= 1000 ? 0 : currentNumber;
    })
  }
  return negativeNumbers ? `${ERROR_MESSAGE}: ${negativeNumbers}` : sum;
}

const getStringNumber = myString => {
  let number;
  if(myString.slice(0,2) == '//'){
    const newDelimiter = myString.charAt(2);
    number = myString.slice(4).split(new RegExp(`[,${newDelimiter}\n]`, 'g'));
  }else{
    number = myString.split( /\s*,|\s\n*/); 
  }
  return number;
}

module.exports = {
  sumOfNumbers
}