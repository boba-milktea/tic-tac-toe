export const setHover = (board, circleTurn) => {
    board.classList.remove('x');
    board.classList.remove('circle');
    board.classList.add(circleTurn ? 'circle' : 'x');
};
