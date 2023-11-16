# 1. Grid Creation (createGrid funciton)

## Code Segment

```
function createGrid(gridElement) {
    // Clears any existing content in the grid
    gridElement.innerHTML = '';

    // Loop to create grid cells
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell'); // Assigns class for styling
            cell.dataset.row = row;          // Stores row number
            cell.dataset.col = col;          // Stores column number
            gridElement.appendChild(cell);   // Appends cell to grid
        }
    }
}

```

## Explanation
- The createGrid function dynamically constructs a grid for the Battleship game.
- It uses nested loops to create individual cells (div elements) for each position in the grid, based on gridSize.
- Each cell is assigned a class for styling and custom data attributes (data-row and data-col) to store its position, facilitating later retrieval and manipulation during gameplay.

# 2. Player and Opponent Turn Management

## Code Segment

```
// checks to see if there is hit or miss from opponent
function playerTurn() {
    clearCellEventListeners(opponentGrid); 
    const cells = opponentGrid.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', handlePlayerAttack);
    });
}
    
// checks to see if there is hit or miss from player
function opponentTurn() {
    clearCellEventListeners(playerGrid); 
    const cells = playerGrid.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', handleOpponentAttack);
    });
}
```

## Explanation
- playerTurn and opponentTurn functions manage the turn-based nature of the game.
- Each function sets up event listeners on the respective opponent's grid, allowing for interactive gameplay.
- When a cell is clicked, the corresponding attack handler (handlePlayerAttack or handleOpponentAttack) is triggered, processing the attack and updating the game state.

# 3. Game Over Check (isGameOver Function)

## Code Segment

```
function isGameOver(gridElement) {
    const totalBoats = 5;
    const hitBoats = gridElement.querySelectorAll('.boat.hit').length;
    return hitBoats === totalBoats;
}
```

## Explanation
- The isGameOver function determines if all boats in a player's grid have been hit, signaling the end of the game.
- It counts the number of boat elements (div with class .boat) that also have the .hit class.
- If the number of hit boats equals the total number of boats (totalBoats), the function returns true, indicating that the game is over for that grid.

