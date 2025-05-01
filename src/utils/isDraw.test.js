import { isDraw } from './isDraw.js';

describe('isDraw', () => {
    test('returns true when all cells are filled', () => {
        const inputs = ['x', 'o', 'x', 'x', 'o', 'o', 'o', 'x', 'x'];
        expect(isDraw(inputs)).toBe(true);
    });

    test('returns false when at least one cell is empty', () => {
        const inputs = ['x', 'o', 'x', null, 'o', 'o', 'o', 'x', 'x'];
        expect(isDraw(inputs)).toBe(false);
    });

    test('returns false when all cells are empty', () => {
        const inputs = Array(9).fill(null);
        expect(isDraw(inputs)).toBe(false);
    });

    test('returns false when inputs array is shorter than 9 cells', () => {
        const inputs = ['x', 'o', 'x'];
        expect(isDraw(inputs)).toBe(false);
    });
});
