/*
Build a tic-tac-toe game implementation.

First I will build the implementation of the game as a object-oriented implementation
Then, I will look into building a small browser implementation. Basic game, alternating
  players, automatic game, progession.

Game considerations:
  Consider instantiating the board with a string space ' ' character in every position.
  This will make rendering the board easy, and I can set the game play loop for an automatic
    game run as long as the random position === ' '.

  Automatic game play will not care about strategic play position at all.

  A method to restart the game
  OR: a method to resolve the game automatically, randomly if you don't want to play it out

*/

class TicTacToe {
  constructor () {
    // inside of the constructor, all of these features will be instantiated as soon as the instance is invoked.

    // Construct the board.
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    // keep track of the player,
    this.currentPlayer = 'x';

    // keep track of the game wins,
    this.score = {
      'Player X': 0,
      'Player O': 0,
    };

    // any other pre-game logic
    // any other post-game logic
  };

  // below are all of the methods for controlling the game

  // player making a move
  playerMove() {
    // after every move that a player has made, check for all end-game conditions

  };

  // method to alternate player move
  changePlayer() {
    // check the current player, reassign the player to the next.

  };

  // method to check win by row
  checkRow() { // to be called after every move
    for (let row of this.board) {
      if (row[0] !== ' ') {
        if (row[0] === row[1] && row[0] === row[2]) {
          this.handleGameWin();
        }
      }
    }
    // Iterate through the board, check for strict equality between all values in each row.
    // CAVEAT - Ensure that the checked value is not the default value for an empty board.
      // this would result in a win for every game after the first move has been made
  };


  // method to check win by column
  checkColumn() {
    for (let i = 0; i < 3; i++) {
      if (this.board[0][i] !== ' ') {
        if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]) {
          this.handleGameWin();
        }
      }
    }
    // to be called after every move
    // Iterate through the board, check for strict equality between all values in each column.
      // CAVEAT - Ensure that the checked value is not the default value for an empty board.
        // this would result in a win for every game after the first move has been made
  }

  // method to check for win by diagonal
  checkDiagonal() {
    if (this.board[1][1] !== ' ') {
      if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
        this.handleGameWin(); // major diagonal
      } else if (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) {
          this.handleGameWin(); // minor diagonal
        }
      }
    }
    // major diagonal or minor diagonal
    // to be called after every move
      // check for equality on both diagonal arangements
  }

  // method to update player win score upon game completion
  handleGameWin() {

    // this function will be called when a game ending condition has been met except when game ends in a draw.
    // when a WINNING game condition has been met, call this function and increment the game-win counter
      // for that appropriate player.
    // Decide whether winning a game should effect the first player's turn for the following game
  }

  // method for handling a game-end in a draw.
  handleGameDraw() {

    // method will be called when the game board has been filled AND no WINNING condition has been met
  }

  // method to end the game
  handleGameOver() {

    // this method will be called when any end game condition has been met
    // this should, after resolving all end-game functionality, reset the board and prepare for the next game.
  }

};
