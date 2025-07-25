import { randomInt } from 'crypto';

export function generateSecureRandomInt(min: number, max: number): number {
    return randomInt(min, max + 1);
}
