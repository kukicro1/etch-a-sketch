const container = document.querySelector('#container');
const clearGrid = document.querySelector('#clearGrid');

//Makes cells (divs)
function makeDiv (cells) {
    for (let i = 0; i < (cells * cells); i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'cell')
        container.appendChild(div);
    }
    return;
}

//Makes grid
function makeGrid(grid) {
    let n = 100 / grid;
    let string = '';
    for (let i = 0; i < (grid); i++){
        string += `${n}% `;
    }
    container.setAttribute('style', `grid-template-columns: ${string}; grid-template-rows: ${string}`);
    
}
    makeDiv(5);
    makeGrid(5);

//Change color of divs
const cell = document.querySelectorAll('.cell');
cell.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.setAttribute('style', 'background: gray;');
        });
    });
    
// Makes new grid
clearGrid.addEventListener('click', () => {
    let newGrid = prompt('Enter new grid size', '');
    


});