/**
 * check if there's a winner and return the winner
 * @param {array} [patterns=[]] an array with the winning patterns
 * @param {array} [inputs=[]] an array with user inputs
 * @returns {string} the winner
 */

export const hasWinner = (patterns = [], inputs = []) => {
    let winner;
    for (const [a, b, c] of patterns) {
        if (inputs[a] && inputs[a] === inputs[b] && inputs[a] === inputs[c]) {
            winner = inputs[a];
        }
    }
    return winner;
};
