const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let sum = 0;

    matrix.forEach((row, rowIdx) => {
        row.forEach((_, colIdx) => {
            const currentItem = matrix[rowIdx][colIdx];

            const colAbove = matrix[rowIdx - 1];

            if (colAbove) {
                const isZeroBelow = colAbove[colIdx] === 0;
                if (!isZeroBelow) sum += currentItem;
            } else {
                sum += currentItem;
            }
        });
    });

    return sum;
}

module.exports = {
    getMatrixElementsSum,
};
