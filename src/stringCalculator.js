const sumOfNumbers = myString => {
  if(myString == '')
    return 0;
  else{
    let number = myString.split( /\s*,|\s\n*/);
    let sum = 0;
    number.forEach(item => sum += parseInt(item))
    return sum;
  }
}

module.exports = {
  sumOfNumbers
}