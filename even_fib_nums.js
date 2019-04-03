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

  // method 1;
  // let fibArr = [0,1];
  // for (let i = 1; fibArr[i]<=maxFibValue; i++) {
  //   fibArr.push(fibArr[i-1]+fibArr[i]);
  //   if (fibArr[i] % 2 === 0 && fibArr[i] <= maxFibValue) {
  //     sum += fibArr[i];
  //   }
  // }

  // method 2;
  let n1 = 0;
  let n2 = 1;
  let nextFibNum = 0;
  while (nextFibNum <= maxFibValue) {
    nextFibNum = n1 + n2;
    n1 = n2;
    n2 = nextFibNum;
    if (nextFibNum % 2 === 0 && nextFibNum <= maxFibValue) {
      sum += nextFibNum;
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;

  //define your base case, validate your input

  // method 1
  // let fibArr = [0,1];

  // //do your work here
  // if (maxFibValue > 1) {
  //   for (let i = 1; fibArr[i]<=maxFibValue; i++) {
  //     if (fibArr[i] <= maxFibValue) {
  //       fibArr.push(fibArr[i-1]+fibArr[i]);
  //     }
  //   }
  // }
  // highest = fibArr[fibArr.length-2];

  // method 2
  let n1 = 0;
  let n2 = 1;
  let nextFibNum = 0;
  while (nextFibNum <= maxFibValue) {
    nextFibNum = n1 + n2;
    n1 = n2;
    n2 = nextFibNum;
  }

  highest = n1;

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