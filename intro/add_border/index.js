/* eslint-disable prefer-const */
/**
 *
 * @param {string[]} picture
 * @returns {string[]}
 */

function addBorderX(picture) {
  let stars = '';

  for (let i = 0; i < picture[0].length + 2; i += 1) {
    stars = stars.concat('*');
  }

  const res = [stars, ...picture, stars];
  for (let i = 1; i < res.length - 1; i += 1) {
    res[i] = '*'.concat(res[i], '*');
  }

  return res;
}

function addBorder(picture) {
  let stars = '*'.repeat(picture[0].length + 2);

  return [stars, ...picture.map(x => `*${x}*`), stars];
}

const picture = ['abc', 'ded'];
console.log(addBorder(picture));
