// const gameBoard = (() => {
//     const cells = document.querySelectorAll("#board-container div");

//     // Convert the NodeList to an array for easier manipulation
//      const cellArray = Array.from(cells);
  
//     // Add event listeners to each cell
//     cellArray.forEach(cell => {
//         cell.addEventListener("click", () => {
//             cell.innerHTML = "X";
//         });
//     });
// })();

// let test = true;
 
// const findWinner = () => {
//     const rows = [
//         document.querySelectorAll(".R1"),
//         document.querySelectorAll(".R2"),
//         document.querySelectorAll(".R3")
//     ];

//     console.log("test 1")

//     rows.forEach(row => {
//         Array.from(row).forEach(cell => {
//             if (cell.textContent === "X") {
//                 console.log("X has occupied a row")
//             }
//             if (test === true) {
//                 console.log("test 2")
//             }
//         });
//     });
// };

// function Player(name, number, marker) {
//     this.name = name;
//     this.number = number;
//     this.marker = marker;
//     this.sayName = function() {
//         console.log(name);
//     };
// }

// let playerOne;
// let playerTwo;

// function startGame() {
//     playerOne = new Player(prompt("Enter the first player's name"), 1, "X");
//     playerTwo = new Player(prompt("Enter the second player's name"), 2, "O");

//     playerOne.sayName();
//     playerTwo.sayName();
// }

// const cells = document.querySelectorAll("#board-container div");
// const cellArray = Array.from(cells);

// cellArray.forEach(cell => {
//     cell.addEventListener("click", () => {
//         cell.innerHTML = "X";
//     });
// });

const displayController = (() => {
    const renderMessage = (message) => {
        document.querySelector("#message").innerHTML = message; 
    }
    return {
        renderMessage
    }
})();

const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;
        const square = document.querySelectorAll(".square");
        square.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        })
    }

    const update = (index, value) => {
        gameboard[index] = value;
        render();
    }

    const getGameBoard = () => gameboard; 

    return {
        render,
        update,
        getGameBoard
    }
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value, "X"), 
            createPlayer(document.querySelector("#player2").value, "O")
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    
        document.getElementById("message").innerHTML = "";
        document.querySelectorAll(".square").forEach((square) => {
            square.addEventListener("click", handleClick);
        });
    };

    const handleClick = (event) => {
        if (gameOver) {
            return;
        }
        let index = parseInt(event.target.id.split("-")[1]);
        if (Gameboard.getGameBoard()[index] !== "")
            return;

        Gameboard.update(index, players[currentPlayerIndex].mark);

        if(checkForWin(Gameboard.getGameBoard(), players[currentPlayerIndex].mark)){
            gameOver = true;
            displayController.renderMessage(`${players[currentPlayerIndex].name} wins`)
        } else if (checkForTie(Gameboard.getGameBoard())){
            gameOver = true;
            displayController.renderMessage(`It's tie`)
        }
        

        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    const restart = () => {
        for (let i = 0; i < 9; i++) {
            Gameboard.update(i, "");
        }
        Gameboard.render();
        gameOver = false;
    }

    return {
        start,
        restart,
        handleClick
    }
})();

function checkForWin(board) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winningCombinations.length; i++){
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board [a] === board[c]){
            return true;
        }       
    }
    return false;
}

function checkForTie (board) {
    return board.every(cell => cell !== "")
}

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", () => {
    Game.restart();
})

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", ()=> {
    Game.start();
})