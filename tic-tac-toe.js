window.onload = function()
{
    //user turns 
    let x_turn = true;
    const X_CLASS ="X";
    const O_CLASS = "O";
    
    let xWinningVal= 0;
    let oWinningVal=0;

let board = document.getElementById("board");//access the board

const WINNER_GROUP=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let button = document.getElementsByClassName("button");//access button element
let div = board.querySelectorAll("div") //get all the div tags

//get the div elements and loop through to give each a different class
div.forEach((element,index) => {
    element.setAttribute("class","square")//loop through every div tag and set each div tag with a class of square    
    //add event listner
    element.addEventListener("click", clickListner, {once:true})//ensure that a user can click a square only once

    //hover effect
    element.onmouseover =()=>{
        element.classList.add("hover");
    }

    element.onmouseout =()=>{
        element.classList.remove("hover");        
    }

});

function clickListner(e){
    const element = e.target; //targets each cell element once it is clicked
    const currentClass= x_turn ? X_CLASS : O_CLASS;
    recordEvent(element, currentClass)//takes the cell element and the current class and marks it with the current class
    siwtchRecordedEvent()//alternates between the X and O when the user selects a square

    winnerVal = winner();

    if(winnerVal == 1){
      console.log(currentClass + " has won");
    }
}

//function to add the element in the square when a square is selected
function recordEvent(element, currentClass){
    element.innerHTML=currentClass;
    element.classList.add(currentClass);
}

//function to laternate the event on the board
function siwtchRecordedEvent(){
    x_turn = !x_turn;//changes the state of x_turn 
}


//checks for winning combinations
function winner(){
    for( i=0;  WINNER_GROUP.length; i++){//loops throught the winner combinations array 
        WINNER_GROUP[i].forEach(element =>{
            if(div[element].classList.contains("X")){//checks if each element in the div has the class of X and increments the x winning val
                xWinningVal++;
            }
            else if (div[element].classList.contains("O")){
                oWinningVal++; //increments the o winning val if it doesnt contain X 
            }
        });

        if (xWinningVal == 3 || oWinningVal == 3){//once the x winnign val or the o winning val reaches zero it returns one
            return 1;
        }

        xWinningVal=0;//resets x-winning va;
        oWinningVal=0;//rests 0-winning va;

        if(i < WINNER_GROUP.length - 1){
            continue;
        }

        return 0;
    }

}

}; 



