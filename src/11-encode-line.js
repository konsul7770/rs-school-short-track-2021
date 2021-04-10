/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return '';
  }
  const outstr = [];
  let count = 1;
  const l = str.length;
  for (let i = 1; i < l; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        outstr.push(`${count}${str[i - 1]}`);
      } else {
        outstr.push(str[i - 1]);
      }
      count = 1;
    }
  }

  if (str[l - 1] === str[l - 2]) {
    outstr.push(`${count}${str[l - 1]}`);
  } else {
    outstr.push(str[l - 1]);
  }
  return outstr.join('');
}

module.exports = encodeLine;
