export function minReplacementsToAvoidTriplets(row: number[]): number {
    let replacements = 0;
    let count = 1;

    for (let i = 1; i < row.length; i++) {
        if (isSameSign(row[i], row[i - 1])) {
            count++;
            if (count === 3) {
                replacements++;
                count = 1;
                i++;
            }
        } else {
            count = 1;
        }
    }

    return replacements;
}

const isSameSign = (a: number, b: number): boolean =>
    a !== 0 && b !== 0 && Math.sign(a) === Math.sign(b);

// [78, -79, -10, -88, -69, -49, 35, -33, -39, 72]