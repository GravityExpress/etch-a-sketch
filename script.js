function createGrid () 
{
    for (let i = 0; i < 16 ** 2; i++)
    {
        let cell = document.createElement("div");
        cell.classList.add("cells");
        grid.appendChild(cell);
    }
}

let gridSize = 50;
let grid = document.querySelector("#grid");
grid.style.width = gridSize + "vh";

createGrid();

let cellSize = gridSize/16 + "vh";
let cells = document.querySelectorAll(".cells");

cells.forEach((cell) => {
    cell.style.width = cellSize;
    cell.style.height = cellSize;
});