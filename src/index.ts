import { generateMatrix } from './utils/generateMatrix';
import { prettyMatrix } from './utils/prettyMatrix';
import { MATRIX_COLS, MATRIX_ROWS, MAX_RANDOM, MIN_RANDOM } from './constants/matrix';

const matrix = generateMatrix(MATRIX_ROWS, MATRIX_COLS, MIN_RANDOM, MAX_RANDOM);
const pretty = prettyMatrix(matrix);

console.log(pretty);

