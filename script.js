// Course: SENG 513
// Date: 2019-02-10
// Assignment 2
// Name: Paul Hui
// UCID: 10122682


// Start off by creating blank boards for both you and Player 2

// Now, let's put your ships on your board
// And let's also put Player 2's ships on their board

// Set both your score and Player 2's score to zero

// Keep playing until someone wins
//     Show both boards so you know what's going on

//     Your Turn:
//         Pick where you want to attack on Player 2's board
//         See if you got a hit or a miss
//         Update what Player 2's board looks like and update your score

//     Player 2's Turn:
//         Player 2 picks where to attack on your board
//         They check if they got a hit or a miss
//         Now update your board and Player 2's score

//     Time to see if we have a winner:
//         If you've sunk all of Player 2's ships:
//             You win, so break out of the loop
//         Or if Player 2 has sunk all of your ships:
//             Player 2 wins, so break out of the loop

// When the game is over, show who won and what the final scores are


document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const playerGrid = document.getElementById('player-grid');
    const gridSize = 10;

    // Event listener for the "Start Game" button
    startButton.addEventListener('click', function () {
        // Clear existing content in the player's grid
        playerGrid.innerHTML = '';

        // Create the player's grid
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const cell = document.createElement('div');
                cell.dataset.row = row;
                cell.dataset.col = col;
                playerGrid.appendChild(cell);
            }
        }

        alert("Functionality still in progress!!!");
    });
});





//Functionality I will need to implement
//initializing board
//setting up ships for each player
//displaying the board
//allowing user to choose where to attack
//check for hit or miss
//update score
//check to see if game is over
//changing turns

//will need listner for when a cell is selected (on click)
//will need listener for resetting game (on click)

