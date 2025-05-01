export const hasWinner = (patterns = [], inputs = []) => {
    let winner;
    for (const [a, b, c] of patterns) {
        if (inputs[a] && inputs[a] === inputs[b] && inputs[a] === inputs[c]) {
            winner = inputs[a];
        }
    }
    return winner;
};
