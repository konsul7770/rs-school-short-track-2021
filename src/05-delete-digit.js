/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  let max;
  if (digits.length > 1) {
    for (let i = 0; i < digits.length; i++) {
      const s = digits[i];
      digits.splice(i, 1);
      const tmp = Number.parseInt(digits.join(''), 10);
      digits.splice(i, 0, s);
      if (i === 0) {
        max = tmp;
      }
      if (tmp > max) {
        max = tmp;
      }
    }
  }
  return max;
}

module.exports = deleteDigit;
