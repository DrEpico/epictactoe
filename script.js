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

const gameStart = (() => {
    function Player(name, number, marker){
        this.name = name
        this.number = number
        this.marker = marker
        this.sayName = function() {
            console.log(name)
        }
    }  

    const playerOne =  new Player(prompt("Enter the first player's name"), 1, "X");
    const playerTwo =  new Player(prompt("Enter the second player's name"), 2, "O");  
    
    playerOne.sayName();
    playerTwo.sayName();

    return {
        playerOne,
        playerTwo
    }
})


const gameData = gameStart(); 
console.log(gameData.playerOne,gameData.playerTwo); 