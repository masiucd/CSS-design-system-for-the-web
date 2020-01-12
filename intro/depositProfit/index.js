/**
 *
 * @param {number} deposit
 * @param {number} rate
 * @param {number} threshold
 * @returns {number}
 */
const depositProfit = (deposit, rate, threshold) => {
  let year = 0;

  while (deposit < threshold) {
    deposit += deposit * (rate / 100);
    year += 1;
  }

  return year;
};
function depositProfit2(d, r, t) {
  return Math.ceil(Math.log(t / d) / Math.log(r / 100 + 1));
}

console.log(depositProfit(100, 20, 170));
