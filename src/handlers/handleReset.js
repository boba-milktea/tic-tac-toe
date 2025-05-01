import state from '../data.js';
import dom from '../dom.js';
import { handleLoad } from './handleLoad.js';

export const handleReset = () => {
    dom.board.innerHTML = '';
    dom.modal.classList.remove('show');
    state.inputResults = [null, null, null, null, null, null, null, null, null];
    state.circleTurn = false;
    handleLoad();
};
