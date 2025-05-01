export const createCells = (id) => {
    const divEl = document.createElement('div');
    divEl.classList.add('cell');
    divEl.id = id;
    return divEl;
};
