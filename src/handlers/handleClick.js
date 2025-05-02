import state from '../data.js';
import dom from '../dom.js';
import { hasWinner } from '../utils/hasWinner.js';
import { setHover } from '../components/setHover.js';
import { placeSymbol } from '../components/placeSymbol.js';
import { isDraw } from '../utils/isDraw.js';

export const handleClick = (e) => {
    const cell = e.target;

    if (cell.classList.contains('x') || cell.classList.contains('circle')) {
        return;
    }
    const currentClass = state.circleTurn ? 'circle' : 'x';
    placeSymbol(cell, currentClass);
    state.inputResults[cell.id] = currentClass;
    const winner = hasWinner(state.winningPatterns, state.inputResults);
    const draw = isDraw(state.inputResults);

    if (winner) {
        dom.message.innerText = `${state.circleTurn ? "O's" : "X's"} Wins!`;
        dom.modal.classList.add('show');
    } else if (draw) {
        dom.message.innerText = 'Draw!';
        dom.modal.classList.add('show');
    } else {
        state.circleTurn = !state.circleTurn;
    }

    setHover(dom.board, state.circleTurn);
};
