import { hasWinner } from './hasWinner.js';

describe('hasWinner', () => {
    const patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    test('returns "x" when x wins in the top row', () => {
        const inputs = ['x', 'x', 'x', null, null, null, null, null, null];
        expect(hasWinner(patterns, inputs)).toBe('x');
    });

    test('returns "o" when o wins diagonally', () => {
        const inputs = ['o', null, null, null, 'o', null, null, null, 'o'];
        expect(hasWinner(patterns, inputs)).toBe('o');
    });

    test('returns undefined when no winner', () => {
        const inputs = ['x', 'o', 'x', 'x', 'o', 'o', 'o', 'x', 'x'];
        expect(hasWinner(patterns, inputs)).toBeUndefined();
    });

    test('returns undefined with empty board', () => {
        const inputs = Array(9).fill(null);
        expect(hasWinner(patterns, inputs)).toBeUndefined();
    });
});
