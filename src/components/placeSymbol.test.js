/**
 * @jest-environment jsdom
 */

import { placeSymbol } from './placeSymbol.js';

describe('placeSymbol', () => {
    test('adds the correct class to the cell', () => {
        const cell = document.createElement('div');
        placeSymbol(cell, 'x');
        expect(cell.classList.contains('x')).toBe(true);
    });
});
