//VARIABLES

// Empty array for storing random generated button values
var buttonValue = []
// var for keeping user score and, and hooks to HTML 
var total = 0;
var scoreKeeper = $("#scoreKeeper").html(total);
//var for keeping track of user wins, and hooks to HTML 
var wins = 0;
var winsKeeper = $("#wins").html(wins);
//var for keeping track of user loses, and hooks to HTML 
var loses = 0;
var loseKeeper = $("#loses").html(loses);

// Variable that generates random goal number, and hooks to HTML
var randoNum = Math.floor(Math.random()*101)+19;
var goalKeeper = $("#goalKeeper").html(randoNum);

//FUNCTIONS

//Function to generate random goal number, and hook to HTML *same as above variable*
function goalSetter(){
    randoNum = Math.floor(Math.random()*101)+19;
    goalKeeper = $("#goalKeeper").html(randoNum);
}

// Function that makes random button values and stores them in empty array
function buttonNum(){
    for (var i = 0; i < 4; i++){
        var randoNum2 = Math.floor(Math.random()*12)+1;
        console.log(randoNum2);
        buttonValue[i] = randoNum2;
    }
}

// Assigns button values to buttons
function buttonAssigner(){
    $("#button0").attr("value", buttonValue[0]);
    $("#button1").attr("value", buttonValue[1]);
    $("#button2").attr("value", buttonValue[2]);
    $("#button3").attr("value", buttonValue[3]);
}

//Function used to reset game after wins/loses
function reset(){
    goalSetter();
    buttonNum();
    console.log(buttonValue);
    buttonAssigner();
    scoreKeeper.html(0);
    total = 0;
    
}
// Calling functions

buttonNum();
console.log(buttonValue);
buttonAssigner();

$(".btn").click(function(){
    var buttonVal = $(this).attr("value");
    total = Number(total) + Number(buttonVal);
    scoreKeeper.html(total);
    if (total > randoNum){
        loses = Number(loses + 1);
        loseKeeper.html(loses);
        reset();
        console.log(randoNum);
        console.log(goalKeeper);
    }
    else if (total === randoNum){
        wins = Number(wins + 1);
        winsKeeper.html(wins);
        reset();
        console.log(randoNum);
        console.log(goalKeeper);
    }
})










   

