const container = document.getElementById("gameContainer"); 
const squareArray = [];
let PlayerOne = "RedCircle";
let PlayerTwo = "BlueCircle";
 
   
//Here we need to determine when player moves to get to form a Line on any directions, if so  line formmed player win.
//if Player forms a line player wins and system will display "player 1 Win". Winner will then have the option to restart the game. 
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


    

class ClassSquare {
    constructor(element, index) {
       this.element = element;
       this.index = index;
       this.state = "";  
    }
    clicked() {
        this.state = PlayerOne;
        this.element.classList.remove("notClicked");
        this.element.oneclick = function () {
            return false;
        };
        this.element.querySelector('p').innerHTML = this.state;
        if(wonGame()) return Draw("The winner is player " + this.state);
        if(isDraw()) return gameOver('it is a draw')
        PlayerOne == "RedCircle" ? (PlayerOne = "0") : (PlayerOne = "RedCircle");
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

