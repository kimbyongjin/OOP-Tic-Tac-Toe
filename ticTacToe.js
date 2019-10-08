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
    // inside of the constructor, all of these features will be instantiated as soon as the
      // instance is invoked.

    // Construct the board.
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    // keep track of the player,
    this.currentPlayer = 'x';

    // keep track of the game wins,
    // each key represents a player and can be updated when a game is won selecting with this.currentPlayer
    this.score = {
      'x': 0,
      'o': 0,
    };

    // any other pre-game logic
    // any other post-game logic
    this.autoGame = false;
    this.win = false;
    this.turnCount = 0;
  }; // end constructor function

  // below are all of the methods for controlling the game

  // player making a move
  playerMove(row, col) {
    // after every move that a player has made, check for all end-game conditions
    // increment turnCount
    this.board[row][col] = this.currentPlayer;
    this.turnCount++;

    // check for row
    // check for column
    // check for diagonal
    // check for draw => turnCount === 9 && win === false
    this.checkRow();
    this.checkColumn();
    this.checkDiagonal();
    this.checkDraw();

    // if win === false
      // change player after all checks have been made
    if (!this.win) {
      this.changePlayer();
    }
  };

  // method to alternate player move
  changePlayer() {
    // check the current player, reassign the player to the next.
    if (this.currentPlayer === 'x') {
      this.currentPlayer = 'o';
    } else {
      this.currentPlayer = 'x';
    }
  };

  // method to check win by row
  checkRow() { // to be called after every move
    if (!this.win) {
      for (let i = 0; i < 3; i++) {
        if (this.board[i][0] !== ' ') {
          if (this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]) {
            this.handleGameWin();
          }
        }
      }
    }
    // Iterate through the board, check for strict equality between all values in each row.
    // CAVEAT - Ensure that the checked value is not the default value for an empty board.
      // this would result in a win for every game after the first move has been made
  };


  // method to check win by column
  checkColumn() {
    if (!this.win) {
      for (let i = 0; i < 3; i++) {
        if (this.board[0][i] !== ' ') {
          if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]) {
            this.handleGameWin();
          }
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
    if (!this.win) {
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

  checkDraw() {
    if (!this.win && this.turnCount === 9) {
      this.handleGameDraw();
    }
  }

  automaticGame() {
    //  TODO: Ensure that no infinite loop will run -
      // currently, a game will reset after completion and while loop will keep going
      // must end game logic somehow.

      // DO NOT CALL THIS METHOD YET


    // Automatic game resolution
    if (this.autoGame) { // possible unecessary game logic.
      let pos1 = randomPosition();
      let pos2 = randomPosition();
      while (this.board[pos1][pos2] !== ' ') {
        pos1 = this.randomPosition();
        pos2 = this.randomPosition();
      }
      this.playerMove(pos1, pos2);
    }
  }

  randomPosition() {
    return Math.floor(Math.random() * 3);
  }

  // method to update player win score upon game completion
  handleGameWin() {
    this.win = true;
    // this function will be called when a game ending condition has been met except when
      // game ends in a draw.
    // when a WINNING game condition has been met, call this function and increment the game-win counter
      // for that appropriate player.
    // Decide whether winning a game should effect the first player's turn for the following game
  }

  // method for handling a game-end in a draw.
  handleGameDraw() {
    this.handleGameOver();
    // method will be called when the game board has been filled AND no WINNING condition has been met
  }

  // method to end the game
  handleGameOver() {

    // this method will be called when any end game condition has been met
    // this should, after resolving all end-game functionality, reset the board and prepare
      // for the next game.
  }

};
