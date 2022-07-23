const container = document.getElementById("gameContainer"); 
const restartButton = document.getElementById('restartButton')
const squareArray = [];
let img = document.querySelector('img')
let nextMove = "X"

//game over


function gameOver(message){
    document.getElementById("winner").innerHTML = message;
    container.style.display = "none";
    document.getElementById("gameOver").style.display = "block";
}


// determine if player 1 wins 
function isDraw() {
    let shouldReturn = true;
squareArray.forEach(({state}) => {
    if (state == "") shouldReturn = false;
 });
 return shouldReturn;
}


//determine if player2 wins 
function isDraw() {
    let shouldReturn = true;
squareArray.forEach(({state}) => {
    if (state == "") shouldReturn = false;
 });
 return shouldReturn;
}


//determine how to win
function wonGame () {
    const lines = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [3, 6, 9, 12], 
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squareArray[a].state !== "" &&
            squareArray[a].state === squareArray[b].state &&
            squareArray[a].state === squareArray[c].state 
        ) {
            return true;
        }
    }
    return false;
}


    
//click element
class ClassSquare {
    constructor(element, index) {
       this.element = element;
       this.index = index;
       this.state = "";  
    }
    clicked() {
        console.log("clicked " + this.index);
        this.state = nextMove;
        this.element.classList.remove("notClicked");
        this.element.onclick = function () {
            return false;
        };
        this.element.querySelector('p').innerHTML = this.state;
        if(wonGame()) return gameOver("The winner is player " + this.state);
        if(isDraw()) return gameOver("it is a draw")
        nextMove == "X" ? (nextMove = "O") : (nextMove = "X");
    }

}




for (let index = 0; index < 16; index++) {
    const div = document.createElement("div");
    div.classList.add("square","notClicked");
    const square = new ClassSquare(div, index);
    div.onclick = function () {
        square.clicked();
    };
    div.appendChild(document.createElement("p"));
    container.appendChild(div);
    squareArray.push(square);

}


//Create image

// var blueImage = document.createElement('img')
// blueImage.src = "/Asset/blue-2.png"
// var redImage = document.createElement('img')
// redImage.src = "/Asset/red-2.png"
// p.appendChild(blueImage)
