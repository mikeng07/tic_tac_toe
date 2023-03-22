var turn = document.getElementById("turn")
var boxes =document.querySelectorAll(".col-4")
var X_or_O = 0;

function Play (){
    
    console.log(boxes.length)

    for(let i =0; i<boxes.length;i++){

        boxes[i].onclick = function (){
            
            if (this.innerHTML !== "X" && this.innerHTML !== "O")
            {
                if (X_or_O %2 ===0){
                    console.log(X_or_O);
                    this.innerHTML ="X";   
                    turn.innerHTML = "O Turn";
                    checkWinner();                   
                    X_or_O ++;
                }
                else{
                    console.log(X_or_O);
                    this.innerHTML ="O";                   
                    turn.innerHTML = "X Turn";
                    checkWinner();                   
                    X_or_O ++;
                }
            }
        }
    }
    
   
}

function checkWinner()


{

    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");
    var box7 = document.getElementById("box7");
    var box8 = document.getElementById("box8");
    var box9 = document.getElementById("box9");
    checkDraw();

    if(box1.innerHTML !== "" && box1.innerHTML==box2.innerHTML&&box1.innerHTML==box3.innerHTML )
    {
        winnerBoxes(box1, box2,box3);
    }
    if(box4.innerHTML !== "" && box4.innerHTML==box5.innerHTML&&box4.innerHTML==box6.innerHTML )
    {
        winnerBoxes(box4, box5,box6);
    }
    if(box7.innerHTML !== "" && box7.innerHTML==box8.innerHTML&&box7.innerHTML==box9.innerHTML )
    {
        winnerBoxes(box7, box8,box9);
    }
    if(box1.innerHTML !== "" && box1.innerHTML==box4.innerHTML&&box1.innerHTML==box7.innerHTML )
    {
        winnerBoxes(box1, box4,box7);
    }
    if(box2.innerHTML !== "" && box2.innerHTML==box5.innerHTML&&box2.innerHTML==box8.innerHTML )
    {
        winnerBoxes(box2, box5,box8);
    }
    if(box3.innerHTML !== "" && box3.innerHTML==box6.innerHTML&&box3.innerHTML==box9.innerHTML )
    {
        winnerBoxes(box3, box6,box9);
    }
    if(box1.innerHTML !== "" && box1.innerHTML==box5.innerHTML&&box1.innerHTML==box9.innerHTML )
    {
        winnerBoxes(box1, box5,box9);
    }
    if(box7.innerHTML !== "" && box7.innerHTML==box5.innerHTML&&box7.innerHTML==box3.innerHTML )
    {
        winnerBoxes(box7, box5,box3);
    }
   
    
 
    

};

document.getElementById('reset').addEventListener('click',reset);


function checkDraw()
{
    if (isDraw())
    {
        turn.innerHTML="Draw";
    }
}
function isDraw(){
    for (let i = 0; i< boxes.length; i++)
    {
        if (boxes[i].innerHTML=="")
        {
            console.log('test 1')
           return false; 
        }

        
    }
    console.log('test 2');
    return true;
    
}
function reset(){
    for(let i =0 ; i<boxes.length;i++){
        boxes[i].classList.remove("win");
        boxes[i].innerHTML="";
        turn.innerHTML="Tic Tac Toe";
        
    
    }
}

function winnerBoxes(b1,b2,b3){
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    turn.innerHTML = b1.innerHTML +" win this game";
}

Play();