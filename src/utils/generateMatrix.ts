import { generateSecureRandomInt } from './generateSecureRandomInt';

export function generateMatrix(rows: number, cols: number, min: number, max: number): number[][] {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => generateSecureRandomInt(min, max)));
}
