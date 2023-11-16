/* Course: SENG 513
Date: 2023-11-16
Assignment 3
Name: Paul Hui
UCID: 10122682 */

// Initial setup: Variables and elements are declared and initialized.
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const playerGrid = document.getElementById('player-grid');
    const opponentGrid = document.getElementById('opponent-grid');
    const gridSize = 10;
    let playerBoatsPlaced = 0;
    let opponentBoatsPlaced = 0;
    let playerScore = 0;
    let opponentScore = 0;
    let currentPlayer = 'player'; 

    // Function to create a grid
    function createGrid(gridElement) {
        gridElement.innerHTML = '';
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-cell');
                cell.dataset.row = row;
                cell.dataset.col = col;
                gridElement.appendChild(cell);
            }
        }
    }

    // Function to allow the player to place boats
    function allowPlayerToPlaceBoats() {

        const cells = playerGrid.querySelectorAll('.grid-cell');

        cells.forEach(cell => {

            cell.addEventListener('click', function() {
                if (!this.classList.contains('boat') && playerBoatsPlaced < 5) {
                    this.classList.add('boat');
                    playerBoatsPlaced++;

                    if (playerBoatsPlaced === 5) {
                        hidePlayerBoats();
                        alert("Opponent can now place 5 boats!");
                        setupOpponent(); 
                    }
                }
            });
        });
    }

    // Function to allow the opponent to place boats
    function allowOpponentToPlaceBoats() {
        const cells = opponentGrid.querySelectorAll('.grid-cell');
    
        cells.forEach(cell => {
            cell.addEventListener('click', function() {
                if (!this.classList.contains('boat') && opponentBoatsPlaced < 5) {
                    this.classList.add('boat');
                    opponentBoatsPlaced++;
    
                    if (opponentBoatsPlaced === 5) {
                        hideOpponentBoats(); 
                        startGame(); 
                    }
                }
            });
        });
    }

    // hides Opponents boats
    function hideOpponentBoats() {
        const boats = opponentGrid.querySelectorAll('.boat');
        boats.forEach(boat => {
            boat.classList.add('hidden-boat'); 
        });
    }

    // hides players boats
    function hidePlayerBoats() {
        const boats = playerGrid.querySelectorAll('.boat');
        boats.forEach(boat => {
            boat.classList.add('hidden-boat');
        });
    }

    // Function to set up the opponent's grid
    function setupOpponent() {
        createGrid(opponentGrid);
        allowOpponentToPlaceBoats(); 
    }


    // Function to start the actual game
    function startGame() {
        alert("Both players have placed their boats. Start the game!");
        playerTurn();
    }
    
    // checks to see if there is hit or miss from player
    function handlePlayerAttack(event) {
        const cell = event.target;
        if (!cell.classList.contains('hit') && !cell.classList.contains('miss')) {
            if (cell.classList.contains('boat')) {
                cell.classList.add('hit');
            } else {
                cell.classList.add('miss');
            }
            if (isGameOver(opponentGrid)) {
                endGame('Player');
            } else {
                currentPlayer = 'opponent';
                opponentTurn();
            }
        }
    }

    // Checks if game is over
    function isGameOver(gridElement) {
        const totalBoats = 5; 
        const hitBoats = gridElement.querySelectorAll('.boat.hit').length;
        return hitBoats === totalBoats;
    }
    
    // clears all event listeners
    function clearCellEventListeners(gridElement) {
        const cells = gridElement.querySelectorAll('.grid-cell');
        cells.forEach(cell => {
            cell.replaceWith(cell.cloneNode(true));
        });
    }

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
    
    // checks to see if there is hit or miss from opponent
    function handleOpponentAttack(event) {
        const cell = event.target;
        if (!cell.classList.contains('hit') && !cell.classList.contains('miss')) {
            if (cell.classList.contains('boat')) {
                cell.classList.add('hit');
            } else {
                cell.classList.add('miss');
            }
            if (isGameOver(playerGrid)) {
                endGame('Opponent');
            } else {
                currentPlayer = 'player';
                playerTurn();
            }
        }
    }

    // ends the game
    function endGame(winner) {
        if (winner === 'Player') {
            playerScore++;
            document.getElementById('player-score').textContent = playerScore;
        } else if (winner === 'Opponent') {
            opponentScore++;
            document.getElementById('opponent-score').textContent = opponentScore;
        }
        triggerCelebrationAnimation();
    
        const victoryMessage = document.createElement('div');
        victoryMessage.innerHTML = `<h1>${winner} Wins!</h1>
                                    <p>Congratulations!</p>
                                    <button id="reset-game">Play Again</button>`;
        victoryMessage.classList.add('victory-message');
        document.body.appendChild(victoryMessage);
    
        document.getElementById('reset-game').addEventListener('click', resetGame);
    }
    
    // triggers the celebration animation
    function triggerCelebrationAnimation() {
        const duration = 5 * 1000;
        const end = Date.now() + duration;
    
        const interval = setInterval(() => {
            if (Date.now() > end) {
                clearInterval(interval); 
            } else {
                confetti({
                    particleCount: 7,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#bb0000', '#ffffff']
                });
                confetti({
                    particleCount: 7,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#bb0000', '#ffffff']
                });
            }
        }, 15); 
    }
    
    // resets the game
    function resetGame() {
        const victoryMessage = document.querySelector('.victory-message');
        if (victoryMessage) {
            document.body.removeChild(victoryMessage);
        }
    
        clearGrids();
        startNewGame();
    }
    
    // starts a new game
    function startNewGame() {
        createGrid(playerGrid);
        alert("Player 1 can now place 5 boats!");
        playerBoatsPlaced = 0; 
        opponentBoatsPlaced = 0; 
        allowPlayerToPlaceBoats(); 
    }

    // clears the grids
    function clearGrids() {
        playerGrid.innerHTML = '';
        opponentGrid.innerHTML = '';
    }
    
    // Event listener for the "Start Game" button
    startButton.addEventListener('click', function () {
        createGrid(playerGrid);
        alert("Player 1 can now place 5 boats!");

        allowPlayerToPlaceBoats();
    });
});