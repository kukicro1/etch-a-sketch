const container = document.querySelector('#container');

//Makes cells (divs)
function makeDiv (cells) {
    for (let i = 0; i < (cells * cells); i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'cell')
        container.appendChild(div);
    }
    let n = 100 / cells;
    let string = '';
    for (let i = 0; i < (cells); i++){
        string += `${n}% `;
    }
    container.setAttribute('style', `grid-template-columns: ${string}; grid-template-rows: ${string}`);
    const cell = document.querySelectorAll('.cell');
    cell.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.setAttribute('style', 'background: gray;');
            });
    });
}
makeDiv(5);

//Builds new grid
const newGrid = document.querySelector('#clearGrid');
newGrid.addEventListener('click', () => {
    const deleteDiv = document.querySelectorAll('.cell');
    deleteDiv.forEach((div) => {div.remove()});
    let grid = prompt('Enter new grid size', '');
    if(grid > 50){
        grid = prompt('Enter new grid number less than 50.', '');
    }
    makeDiv(grid);
});  