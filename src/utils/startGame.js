export const startGame = (board) => {
    for (const child of board.children) {
        child.classList.remove('x');
        child.classList.remove('circle');
        child.removeEventListener('click', handleClick);
        child.addEventListener('click', handleClick);
    }
};
