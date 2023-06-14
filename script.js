const gameBoard = (() => {
    const cells = document.querySelectorAll("#board-container div");

    // Convert the NodeList to an array for easier manipulation
     const cellArray = Array.from(cells);
  
    // Add event listeners to each cell
    cellArray.forEach(cell => {
        cell.addEventListener("click", () => {
            cell.innerHTML = "X";
        });
    });
})();

let test = true;

const findWinner = () => {
    const rows = [
        document.querySelectorAll(".R1"),
        document.querySelectorAll(".R2"),
        document.querySelectorAll(".R3")
    ];

    console.log("test 1")

    rows.forEach(row => {
        Array.from(row).forEach(cell => {
            if (cell.textContent === "X") {
                console.log("X has occupied a row");
            }
            if (test === true) {
                console.log("test 2");
            }
        });
    });
};

function Player(name, number, marker) {
    this.name = name;
    this.number = number;
    this.marker = marker;
    this.sayName = function() {
        console.log(name);
    };
}

let playerOne;
let playerTwo;

function startGame() {
    playerOne = new Player(prompt("Enter the first player's name"), 1, "X");
    playerTwo = new Player(prompt("Enter the second player's name"), 2, "O");

    playerOne.sayName();
    playerTwo.sayName();
}

const cells = document.querySelectorAll("#board-container div");
const cellArray = Array.from(cells);

cellArray.forEach(cell => {
    cell.addEventListener("click", () => {
        cell.innerHTML = "X";
    });
});