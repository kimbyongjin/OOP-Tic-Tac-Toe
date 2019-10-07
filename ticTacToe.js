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
    // keep track of the player,
    // keep track of the game wins,

    // any other pre-game logic
    // any other post-game logic

  };

  // below are all of the methods for controlling the game

  // player making a move
    // after every move that a player has made, check for all end-game conditions

  // method to alternate player move
    // check the current player, reassign the player to the next.

  // method to check win by row
    // to be called after every move
      // Iterate through the board, check for strict equality between all values in each row.
      // CAVEAT - Ensure that the checked value is not the default value for an empty board.
        // this would result in a win for every game after the first move has been made


  // method to check win by column
    // to be called after every move
    // Iterate through the board, check for strict equality between all values in each column.
      // CAVEAT - Ensure that the checked value is not the default value for an empty board.
        // this would result in a win for every game after the first move has been made

  // method to check for win by diagonal
    // major diagonal or minor diagonal
    // to be called after every move
      // check for equality on both diagonal arangements

  // method to update player win score upon game completion
    // this function will be called when a game ending condition has been met except when game ends in a draw.
    // when a WINNING game condition has been met, call this function and increment the game-win counter
      // for that appropriate player.
    // Decide whether winning a game should effect the first player's turn for the following game

  // method for handling a game-end in a draw.
    // method will be called when the game board has been filled AND no WINNING condition has been met

  // method to end the game
    // this method will be called when any end game condition has been met
    // this should, after resolving all end-game functionality, reset the board and prepare for the next game.

};
