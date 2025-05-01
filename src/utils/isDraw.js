/**
 * Determin if it's a draw
 * @param {array} inputs an array with users inputs ("x" or "circle")
 * @returns {boolean} if it's a draw
 */

export const isDraw = (inputs) => {
    return inputs.every((input) => input !== null);
};
