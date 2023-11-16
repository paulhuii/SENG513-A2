# Battleship Game (Paul Hui)

## Target Platform
- Desktop

## Game Genre
- Strategy
- Board Game

## Objective
The main objective is to sink all of the opponent's ships before they sink yours. Each player strategically places a fleet of ships on a grid and then takes turns to attack the opponent's grid. The game is won by the first player to successfully hit all the cells containing the opponent's ships.

## Rules
1. **Ship Placement:** Each player places a number of ships on their grid at the beginning of the game. The ships can be arranged in any desired pattern.
2. **Turn-Based Attacks:** Players alternate turns, with each player attacking one cell on the opponent's grid per turn.
3. **Hits and Misses:** If an attack hits a ship, it is marked as a 'hit'. If the attack hits an empty cell, it is marked as a 'miss'.
4. **End Game:** The game ends when all the ships of one player are completely hit. The player who destroys all the opponent's ships first wins.

## Game Mechanics
- **Interactive Grids:** Players interact with the game by clicking on cells in the grid to place their ships and to select cells for attacking the opponent.
- **Strategic Placement:** Players must strategically place their ships on the grid in locations they think will be difficult for the opponent to guess.
- **Turn Management:** The game ensures fair play by alternating turns between the players. Each player is allowed only one attack per turn.
- **Scoring System:** A scoreboard tracks the number of wins for each player.
- **End-of-Game Celebration:** A celebration animation is triggered when a player wins, adding to the excitement of the victory.
- **Game Reset:** Players can start a new game using the "Play Again" option, which resets the game state for a fresh start.

## Technical Details
- **Platform:** The game is designed for desktop platforms and is playable on standard web browsers.
- **Technologies Used:** The game is built using HTML for structure, CSS for styling, and JavaScript for interactivity and game logic.
- **Event-Driven Interactions:** User interactions such as ship placement and grid attacks are managed through JavaScript event listeners.
- **Dynamic Updates:** The game's state, including hits, misses, and the scoreboard, is dynamically updated using JavaScript to modify the DOM.
