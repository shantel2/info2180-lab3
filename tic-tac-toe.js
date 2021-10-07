
window.onload = function() 

{let game = document.getElementById("game");//access the game div 

let status = document.getElementById("status");//access the status

let board = document.getElementById("board");//access the board
console.log(board);

let button = document.getElementsByClassName("button");//access button element

let div = board.querySelectorAll("div") //get all the div tags

//get the div elements and loop throug to give each a different class

div.forEach((element, index) => {
    console.log(element);
    element.setAttribute("class","square")//loop through every div tag and set each div tag with a class of square
});





}; 


