let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let gameOver = false;

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

// Function to check if the current player has won
function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

// Function to announce the winner or a draw
function winner() {
    if (checkWin()) {
        alert("Player " + player + " Wins!");
        gameOver = true;
        return;
    } else if (board.every(cell => cell !== "")) {
        document.getElementById("end").innerText = "It's a draw!";
        gameOver = true;
        return;
    }
}

// Function to toggle player
function togglePlayer() {
    if (player === "X") {
        document.getElementById("player").innerHTML = "Player O's turn";
        player = "O";
    } else {
        document.getElementById("player").innerHTML = "Player X's turn";
        player = "X";
    }
}

// Function to handle a move
function play(box) {
    if (gameOver) {
        return; // Prevent further moves if the game is over
    }
    const index = parseInt(box.charAt(box.length - 1));
    if (board[index] === "") {
        styling(box);
        document.getElementById(box).innerHTML = player;
        board[index] = player;
        setTimeout(() => {
            winner();
            if (!gameOver) {
                togglePlayer();
            }
        }, 100);
    } else {
        alert("This box is already taken!");
    }
}

// value styling
function styling(box){
    if(player === "X"){
        document.getElementById(box).style = "color: red;";
    } 
    if(player === "O") {
        document.getElementById(box).style = "color: dodgerblue;";
    }
}

// Function to reset the game
function reset() {
    document.querySelectorAll(".cell").forEach(cell => (cell.innerText = ""));
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    player = "X";
    document.getElementById("player").innerHTML = "Player X's turn";
    document.getElementById("end").innerText = "";
}