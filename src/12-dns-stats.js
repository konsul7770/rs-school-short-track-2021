/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsReversed = domains.map((e) => `.${e.split('.').reverse().join('.')}`);
  const domainsSet = new Set();
  for (let i = 0; i < domainsReversed.length; i++) {
    let idx = 0;
    for (;;) {
      idx = domainsReversed[i].indexOf('.', idx + 1);
      if (idx === -1) {
        domainsSet.add(domainsReversed[i]);
        break;
      }
      const s = domainsReversed[i].substring(0, idx);
      domainsSet.add(s);
    }
  }
  const arrayFromDomainsSet = Array.from(domainsSet);
  const result = {};
  let count;
  arrayFromDomainsSet.forEach((el) => {
    count = 0;
    for (let i = 0; i < domainsReversed.length; i++) {
      if (domainsReversed[i].includes(el)) {
        count++;
      }
    }
    result[el] = count;
  });
  return result;
}

module.exports = getDNSStats;
