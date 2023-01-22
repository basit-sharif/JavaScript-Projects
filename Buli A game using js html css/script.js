let computerGuess;
let userGuess=[];
let attempts;
let mod;
let audio = new Audio("./e.wav");
let noAudio = new Audio("./no.wav");
let yesAudio = new Audio("./yes.wav");
let startNewGame = () =>{
    document.getElementById("newGamebutton").style.display = "inline";
    document.getElementById("inputBox").setAttribute("disabled",true)
}
let init = ()=>{
    computerGuess=Math.floor(Math.random()*100);
    document.getElementById("newGamebutton").style.display="none";
    document.getElementById("gameArea").style.display="none";
}

let startGame = () =>{
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display="block";
}

let easyMode = ()=>{
    maxGuess="10";
    attempts="10";
    audio.play();
    startGame();
    mod = "Easy";
    document.getElementById("modes").innerHTML=`Easy Mode:  ${attempts} Attempts.`;
}
let hardMode = ()=>{
    maxGuess="5";
    attempts = "5";
    audio.play();
    startGame();
    mod = "Hard";
    document.getElementById("modes").innerHTML=`Hard Mode:  ${attempts} Attempts.`;
}
let compairGuess = ()=>{
    attempts--;
    document.getElementById('modes').innerHTML=`${mod} Mode:  ${attempts} Attempts.`;
    let userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess,userNumber];
    document.getElementById("gusses").innerHTML = userGuess;

    if(userGuess.length < maxGuess){
    if(userNumber < computerGuess){
    document.getElementById("textOutput").innerHTML = "Your Guess is Low 🥺.";
    document.getElementById("inputBox").value=0
    noAudio.play();
    }else if(userNumber > computerGuess){
    document.getElementById("textOutput").innerHTML = "Your Guess is High 😊.";
    document.getElementById("inputBox").value=0
    noAudio.play();
    }
    else{
    document.getElementById("textOutput").innerHTML ="It's Correct.";
    startNewGame();
    yesAudio.play();
    }
}else{
    if(userNumber < computerGuess){
    document.getElementById("textOutput").innerHTML = `You Loose ! Correct Answer was ${computerGuess}.`;
    document.getElementById("inputBox").value=0
    startNewGame();
    noAudio.play();
    }else if(userNumber > computerGuess){
    document.getElementById("textOutput").innerHTML = `You Loose ! Correct Answer was ${computerGuess}`;
    document.getElementById("inputBox").value=0
    startNewGame();
    noAudio.play();
    }
    else{
    document.getElementById("textOutput").innerHTML ="It's Correct.";
    startNewGame();
    yesAudio.play();
    }
}
    document.getElementById("attempts").innerHTML=userGuess.length
}