export function findRowIndexOfMinPositiveNum(row: number[]): number | string {
    const positives = row.filter(num => num > 0);
    return positives.length > 0 ? Math.min(...positives) : 'The row has no positive numbers';
}