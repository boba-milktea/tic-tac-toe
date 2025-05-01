/**
 * @jest-environment jsdom
 */

import { createCells } from './cells.js';

describe('createCells', () => {
    test('should create a div element', () => {
        const cellEl = createCells(0);
        expect(cellEl.nodeName).toBe('DIV');
    });

    test('should have class "cell"', () => {
        const cellEl = createCells(1);
        expect(cellEl.classList.contains('cell')).toBe(true);
    });

    test('should have the correct id', () => {
        const cellEl = createCells(5);
        expect(cellEl.id).toBe('5'); // Note: element.id is a string
    });

    test('should create 9 cells and append to board', () => {
        // Set up DOM
        document.body.innerHTML = `<div id="board"></div>`;
        const dom = { board: document.getElementById('board') };

        for (let i = 0; i < 9; i++) {
            const cellEl = createCells(i);
            dom.board.appendChild(cellEl);
        }

        expect(dom.board.children.length).toBe(9);
    });
});
