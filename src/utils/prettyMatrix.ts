import { findRowIndexOfMinNum } from './findRowIndexOfMinNum';
import { findRowIndexOfMinPositiveNum } from './findRowIndexOfMinPositiveNum';
import { minReplacementsToAvoidTriplets } from './minReplacementsToAvoidTriplets';

export function prettyMatrix(matrix: number[][]): string {
    let result = '';
    const minRowIndex = findRowIndexOfMinNum(matrix);

    matrix.forEach((row, index) => {
        const marker = index === minRowIndex ? '*' : ' ';
        const minPos = findRowIndexOfMinPositiveNum(row);
        const replacements = minReplacementsToAvoidTriplets(row);

        result += `${marker} [${row.map(n => String(n).padStart(4)).join(' ')}]  ` +
            `<- | Minimum positive number: ${String(minPos).padStart(4)} ` +
            `| Replacements: ${replacements}\n`
    });

    return result;
}
