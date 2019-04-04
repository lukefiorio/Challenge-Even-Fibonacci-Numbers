/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 0;

  // do your work here
  let fibArr = [0,1];
  for (let i = 1; fibArr[i]<=maxFibValue; i++) {
    fibArr.push(fibArr[i-1]+fibArr[i]);
    if (fibArr[i] % 2 === 0 && fibArr[i] <= maxFibValue) {
      sum += fibArr[i];
    }
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;

  //define your base case, validate your input
  let fibArr = [0,1];

  //do your work here
  if (maxFibValue > 1) {
    for (let i = 1; fibArr[i]<=maxFibValue; i++) {
      if (fibArr[i] <= maxFibValue) {
        fibArr.push(fibArr[i-1]+fibArr[i]);
      }
    }
  }
  highest = fibArr[fibArr.length-2];
  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};