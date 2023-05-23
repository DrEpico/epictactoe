function Player(name, number, marker){
    this.name = name
    this.number = number
    this.marker = marker
}

const playerOne =  new Player(prompt("Enter the first player's name"), 1, "X")
const playerTwo =  new Player(prompt("Enter the second player's name"), 2, "O")

