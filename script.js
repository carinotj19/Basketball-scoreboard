let homeScore = 0;
let guestScore = 0;
let homeScoreTxt = document.getElementsByClassName("scoreCard")[0].children[0];
let guestScoreTxt = document.getElementsByClassName("scoreCard")[1].children[0];
let newGameBtn = document.getElementById("resetBtn");

function resetBtn(){
    if(homeScore == guestScore){
        alert("Both Teams are Tied!")
    } else if (homeScore > guestScore){
        alert("Home Wins!")
    } else {
        alert("Guest Wins!")
    }
    homeScore = 0;
    guestScore = 0;
    homeScoreTxt.textContent = 0;
    guestScoreTxt.textContent = 0;
    document.getElementsByClassName("scoreCard")[1].removeAttribute('id','leading');
    document.getElementsByClassName("scoreCard")[0].removeAttribute('id','leading');
}

function isLeading(){
    if(homeScore == guestScore){
        console.log("TIE!")
        document.getElementsByClassName("scoreCard")[0].setAttribute('id', 'tie');
        document.getElementsByClassName("scoreCard")[1].setAttribute('id','tie');
    } else if (homeScore > guestScore){
        console.log("HOME IS LEADING")
        document.getElementsByClassName("scoreCard")[0].setAttribute('id', 'leading');
        document.getElementsByClassName("scoreCard")[1].removeAttribute('id','leading');
    } else {
        console.log("GUEST IS LEADING")
        document.getElementsByClassName("scoreCard")[1].setAttribute('id', 'leading');
        document.getElementsByClassName("scoreCard")[0].removeAttribute('id','leading');
    }
}

function plusOne(){
    if (event.target.parentElement.id == "btnHome"){
        homeScore += 1;
        homeScoreTxt.textContent = homeScore;
    } else {
        guestScore += 1;
        guestScoreTxt.textContent = guestScore;
    }
    isLeading();
}

function plusThree(){
    if (event.target.parentElement.id == "btnHome"){
        homeScore += 3;
        homeScoreTxt.textContent = homeScore;
    } else {
        guestScore += 3;
        guestScoreTxt.textContent = guestScore;
    }
    isLeading();
}

function plusFive(){
    if (event.target.parentElement.id == "btnHome"){
        homeScore += 5;
        homeScoreTxt.textContent = homeScore;
    } else {
        guestScore += 5;
        guestScoreTxt.textContent = guestScore;
    }
    isLeading();
}