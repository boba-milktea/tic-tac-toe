import dom from '../dom.js';
import state from '../data.js';
import { createCells } from '../components/cells.js';
import { setHover } from '../utils/setHover.js';

export const handleLoad = () => {
    for (let i = 0; i < 9; i++) {
        const cellElements = createCells(i);
        dom.board.appendChild(cellElements);
    }
    setHover(dom.board, state.circleTurn);
};
