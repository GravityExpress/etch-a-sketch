function createGrid(size = 16) 
{
    for (let i = 0; i < size ** 2; i++)
    {
        let cell = document.createElement("div");
        cell.classList.add("cells");
        grid.appendChild(cell);
    }
    let cellSize = gridSize/size + "vh";
    cells = document.querySelectorAll(".cells");
    changeGridSize(cellSize, cells);
    addGridEvent();
}

function changeGridSize(cellSize, cells)
{
    cells.forEach((cell) => {
        cell.style.width = cellSize;
        cell.style.height = cellSize;
    });
}

function clearGridSize()
{
    cells.forEach((cell) => {
        grid.removeChild(cell);
    });
}

function addGridEvent()
{
    cells.forEach((cell) => {
        cell.addEventListener("mouseover",
            (event) => {
                event.target.style.backgroundColor = "black";
            }
        );
    });    
}

let gridSize = 50;
let grid = document.querySelector("#grid");
grid.style.width = gridSize + "vh";
let cells;

createGrid();

let gridSizeButton = document.querySelector("#grid-size-button");
let cellCount = 0;

gridSizeButton.addEventListener("click",
    () => {
        cellCount = Number(prompt("Enter grid size 1 - 100"))
        if (cellCount && cellCount <= 100)
        {
            clearGridSize();
            createGrid(cellCount);
        }
        else
        {
            alert("Cancelled or Invalid Amount");
        }
    }
);

let gridResetButton = document.querySelector("#grid-clear-button");

gridResetButton.addEventListener("click",
    () => {
        cells.forEach((cell) => {
            cell.style.backgroundColor = "white";
        });
    }
);