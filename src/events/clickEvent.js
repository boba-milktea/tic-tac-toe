import { handleClick } from '../handlers/handleClick.js';

export const clickEvent = (board) => {
    board.addEventListener('click', handleClick);
};
