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
        cell.style.backgroundColor = `rgb(255 255 255 / 0)`;
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
                if (colorMode === "black")
                {
                    event.target.style.backgroundColor = `rgb(0 0 0)`;
                }
                else if (colorMode === "rainbow")
                {
                    event.target.style.backgroundColor = `rgb(${randomColor()} ${randomColor()} ${randomColor()})`;
                }
                else if (colorMode === "shade")
                {
                    let alphaCh = event.target.style.backgroundColor;
                    let regEx = /[^,]+(?=\))/;
                    alphaCh = regEx.exec(alphaCh);

                    if (event.target.style.backgroundColor !== "rgb(0, 0, 0)")
                    {
                        event.target.style.backgroundColor = `rgba(0 0 0 / ${+alphaCh + 0.1})`;
                    }
                }
            }
        );
    });    
}

function randomColor()
{
    return Math.floor((Math.random() * 255) + 1);
}

let gridSize = 50;
let grid = document.querySelector("#grid");
grid.style.width = gridSize + "vh";
let cells;
let colorMode = "black";
const radioButtons = document.querySelectorAll("input[name = 'color-mode']");

radioButtons.forEach((choice) => {
    choice.addEventListener("change",
    () => {
        if (choice.checked)
        {
            colorMode = choice.value;
        }
    });
});

createGrid();

const gridSizeButton = document.querySelector("#grid-size-button");
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

const gridResetButton = document.querySelector("#grid-clear-button");

gridResetButton.addEventListener("click",
    () => {
        cells.forEach((cell) => {
            cell.style.backgroundColor = `rgb(255 255 255 / 0)`;
        });
    }
);