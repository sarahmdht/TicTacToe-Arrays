/*
* input: each div value in array - boolean X or O
*operations: alternate two players 
*            validate winner in 3 hor. or 3 ver. or 2 diagonals
*           announce winner
*            reset button
* output: store input value
*         announce winner
*/

let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let gameOver = true;

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
// Check for a win or draw
function winner() {
    if (checkWin()) {
        alert("Player " + player + " Wins!");
        gameOver = true;
        return;
    } else if (board.every(cell => cell !== "")) {
        document.getElementById("end").innerText = "It's a draw!";
        gameOver = false;
        return;
    }
}

// Function to check if the current player has won
function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

// Function to toggle player
function togglePlayer() {
    if (player == "X") {
        document.getElementById("player").innerHTML = "Player O turn";
        player = "O";
    } else {
        document.getElementById("player").innerHTML = "Player X turn";
        player = "X";
    }
}

//cell value alternation
function play(box) {
    if (gameOver) {
        return; // Prevent further moves if the game is over
    }
    if (document.getElementById(box).innerHTML === "") {
        styling(box);
        document.getElementById(box).innerHTML = player;
        setTimeout(() => {
            winner();
            togglePlayer();
        }
            , 100);
    } else {
        alert("This box is already taken!");
    }
}

// Function to reset the game
function reset() {
    document.querySelectorAll(".cell").forEach(cell => (cell.innerText = ""));
    gameOver = false;
    player = "X";
}
