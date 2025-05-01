import state from '../data.js';
import dom from '../dom.js';
import { hasWinner } from '../utils/hasWinner.js';
import { setHover } from '../utils/setHover.js';
import { placeSymbol } from '../utils/placeSymbol.js';
import { isDraw } from '../utils/isDraw.js';

export const handleClick = (e) => {
    const cell = e.target;
    const currentClass = state.circleTurn ? 'circle' : 'x';
    placeSymbol(cell, currentClass);
    state.inputResults[cell.id] = currentClass;
    const winner = hasWinner(state.winningPatterns, state.inputResults);
    const draw = isDraw(state.inputResults);

    if (winner) {
        dom.message.innerText = `${state.circleTurn ? "O's" : "X's"} Wins!`;
        dom.modal.classList.add('show');
    }

    if (draw) {
        dom.message.innerText = 'Draw!';
        dom.modal.classList.add('show');
    }

    state.circleTurn = !state.circleTurn;
    setHover(dom.board, state.circleTurn);
};
