/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const l1 = s1.length;
  const l2 = s2.length;

  const freq1 = new Array(26);
  freq1.fill(0, 0, 26);
  const freq2 = new Array(26);
  freq2.fill(0, 0, 26);

  for (let i = 0; i < l1; i++) {
    freq1[s1.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < l2; i++) {
    freq2[s2.charCodeAt(i) - 97]++;
  }

  let count = 0;
  for (let i = 0; i < 26; i++) {
    count += Math.min(freq1[i], freq2[i]);
  }
  return count;
}

module.exports = getCommonCharacterCount;
