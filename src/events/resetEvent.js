import { handleReset } from '../handlers/handleReset.js';

export const resetEvent = (resetBtn) => {
    resetBtn.addEventListener('click', handleReset);
};
