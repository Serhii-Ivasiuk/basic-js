const { NotImplementedError } = require('../extensions/index.js');

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
    function getMaxWithoutOneDigit(number, removeIdx) {
        const arrOfDigits = [...number.toString()];

        arrOfDigits.splice(removeIdx, 1);

        return Number(arrOfDigits.join(''));
    }

    let max = getMaxWithoutOneDigit(n, 0);

    for (let i = 1; i < n.toString().length; i += 1) {
        const currentMax = getMaxWithoutOneDigit(n, i);
        if (currentMax > max) max = currentMax;
    }

    return max;
}

module.exports = {
    deleteDigit,
};
