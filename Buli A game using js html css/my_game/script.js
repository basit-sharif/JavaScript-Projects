let remainattemps = 0;
let guesses = document.querySelector(".guesses");
let computerGuess =Math.ceil(Math.random()*100);
let userAplly = [];
let attempts;
function startGame(){
    document.getElementById("home1").style.display = "none";
    document.getElementById("hometwo").style.display = "block";
}
function startNewGame(){
    document.getElementById("input").setAttribute("disabled",true);
    let setNewGameDisplay = document.getElementById("newGames");
    setNewGameDisplay.style.display = "block";
}
function easymodePlay(){
    startGame();
    attempts = 11;
}
function hardmodePlay(){
    startGame();
    attempts = 5;
}
function compairGuess(){
    ++remainattemps;
    if(remainattemps < attempts){
            document.querySelector(".attempts").innerHTML=remainattemps;
            let input_val = document.getElementById("input").value;
            userAplly = [...userAplly , input_val];
            guesses.innerHTML = userAplly;
            if(input_val > computerGuess){
                document.getElementById("highrepo").innerHTML = "It is high.";
                document.getElementById("input").value = 0;
            }else if(input_val < computerGuess){
                document.getElementById("highrepo").innerHTML = "It is low.";
                document.getElementById("input").value = 0;
            }
            else{
                document.getElementById("highrepo").innerHTML = "Its correct"
                document.getElementById("input").value = 0;
                startNewGame();
            }
        }else{
            document.querySelector(".attempts").innerHTML=remainattemps;
            let input_val = document.getElementById("input").value;
            userAplly = [...userAplly , input_val];
            guesses.innerHTML = userAplly;
            if(input_val > computerGuess){
                document.getElementById("highrepo").innerHTML = "You Loss The Match.";
                document.getElementById("input").value = 0;
                startNewGame();
            }else if(input_val < computerGuess){
                document.getElementById("highrepo").innerHTML = "You Loss The Match";
                document.getElementById("input").value = 0;
                startNewGame();
            }
            else{
                document.getElementById("highrepo").innerHTML = "Its correct."
                document.getElementById("input").value = 0;
                startNewGame();
            }
        }
}
console.log(computerGuess)