const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    function getValuesAroundTarget(
        targetRowIdx,
        targetColumnIdx,
        targetMatrix
    ) {
        const result = [];

        const prevRow = targetRowIdx - 1;
        const nextRow = targetRowIdx + 1;
        const prevCol = targetColumnIdx - 1;
        const nextCol = targetColumnIdx + 1;

        targetMatrix.forEach((row, rowIdx) => {
            row.forEach((item, colIdx) => {
                if (
                    (rowIdx === prevRow && colIdx === prevCol) ||
                    (rowIdx === nextRow && colIdx === prevCol) ||
                    (rowIdx === prevRow && colIdx === nextCol) ||
                    (rowIdx === nextRow && colIdx === nextCol) ||
                    (rowIdx === prevRow && colIdx === targetColumnIdx) ||
                    (rowIdx === nextRow && colIdx === targetColumnIdx)
                ) {
                    result.push(item);
                }

                if (
                    (colIdx === prevCol && rowIdx === targetRowIdx) ||
                    (colIdx === nextCol && rowIdx === targetRowIdx)
                ) {
                    result.push(item);
                }
            });
        });

        return result;
    }

    const resultMatrix = matrix.map((row, rowIdx) => {
        return row.map((_, colIdx) => {
            const sumOfItemsAroundTarget = getValuesAroundTarget(
                rowIdx,
                colIdx,
                matrix
            ).reduce((sum, value) => (sum += value));

            return sumOfItemsAroundTarget;
        });
    });

    return resultMatrix;
}

module.exports = {
    minesweeper,
};
