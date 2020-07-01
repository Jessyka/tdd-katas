const findPrimes = number => {
    let listNumbers = [];
  
    for(count = 1; count <= number; count ++){
      if(isPrime(count))
        listNumbers.push(count);
    }
    
    return listNumbers;
  }
  
  const isPrime = number => {
    if(number == 1)
      return false;
    
    for(index = 2; index < number; index ++){
      if (number % index == 0)
        return false;
    }
  
    return true;
  
  }
  
  module.exports = {
    findPrimes
  }