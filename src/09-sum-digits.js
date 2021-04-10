/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSum(n) {
  let number = n;
  const arr = [];
  while (number > 0) {
    const digit = number % 10;
    number = (number - (number % 10)) / 10;
    arr.push(digit);
  }
  return arr.reverse().reduce((a, c) => {
    let r = a;
    r += c;
    return r;
  });
}

function getSumOfDigits(n) {
  let res = n;
  for (;;) {
    res = getSum(res);
    if (res < 10) {
      break;
    }
  }
  return res;
}

module.exports = getSumOfDigits;
