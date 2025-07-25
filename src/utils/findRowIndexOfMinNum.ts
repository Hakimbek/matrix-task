export function findRowIndexOfMinNum(matrix: number[][]): number {
    let min = Infinity;
    let rowIndex = -1;

    matrix.forEach((row, index) => {
        const localMin = Math.min(...row);
        if (localMin < min) {
            min = localMin;
            rowIndex = index;
        }
    });

    return rowIndex;
}
