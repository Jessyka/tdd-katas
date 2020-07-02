const sumOfNumbers = myString => {
  let sum = 0;
  if(myString !== ''){
    let number = myString.split( /\s*,|\s\n*/); 
    number.forEach(item => sum += parseInt(item))
  }
  return sum;
}

module.exports = {
  sumOfNumbers
}