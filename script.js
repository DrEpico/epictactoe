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

playerOne.sayName()
playerTwo.sayName()

const gameBoard = (() => {
    const a1 = document.getElementById("a1");
    const a2 = document.getElementById("a2");
    const a3 = document.getElementById("a3");
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const c3 = document.getElementById("c3");
})();