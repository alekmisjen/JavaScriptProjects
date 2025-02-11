# Dice Game

A simple two-player dice game implemented using HTML, CSS, and JavaScript.

## How to Play

1. The game starts with Player 1.
2. Click the **Roll Dice** button to roll a dice:
   - If the roll is **not 1**, the rolled number is added to the current player's score.
   - If the roll is **1**, the turn switches to the other player without adding to the score.
3. Click the **Hold** button to save the current score to the player's total score and switch turns.
4. The first player to reach **100 points** wins the game.
5. Click the **New Game** button to reset and start a new game.

## Features

- Dynamic turn switching between two players.
- Rolling a 1 causes the turn to switch.
- Players can hold their score to accumulate points.
- The game announces the winner when a player reaches 100 points.
- Reset functionality to start a new game.

## Technologies Used

- HTML
- CSS
- JavaScript (DOM Manipulation)

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/dice-game.git
   ```
2. Open the `index.html` file in a browser to play the game.

## File Structure

```
📂 dice-game
├── 📄 index.html  # Main HTML file
├── 📄 style.css   # CSS styles
├── 📄 script.js   # JavaScript logic
└── 📂 images      # Dice images
```

## Screenshots

![Game Screenshot](images/screenshot.png)

## License

This project is open-source and available under the MIT License.

---

**Author:** Your Name  
**GitHub:** [your-username](https://github.com/your-username)
