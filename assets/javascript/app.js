var start= document.getElementById("start");
var questions= document.getElementById("questions");
var triviaDisplay= document.getElementById("triviaQ");
var qImg= document.getElementById("qImg");
var choiceA= document.getElementById("A");
var choiceB= document.getElementById("B");
var choiceC= document.getElementById("C");
var choices= document.getElementById("choices");
var timer= document.getElementById("timer");
var scoreContainer= document.getElementById("scoreContainer");

var triviaQ = [
    {
        question: "Every year, the monsters compete in the riding of the Great Wave. Where does the Great Wave come from?",
        imgSrc: "assets/images/greatWave.jpeg",
        choiceA: "false",
        choiceB: "false",
        choiceC: "true",
        correct: "C"
    },{
        question: "What is my name?",
        imgSrc: "assets/images/Ickis.png",
        choiceA: "true",
        choiceB: "false",
        choiceC: "false",
        correct: "A"
    },{
        question: "Oblina was able to give nightmares to humans by doing what?",
        imgSrc: "assets/images/oblina.png",
        choiceA: "false",
        choiceB: "false",
        choiceC: "true",
        correct: "C"
    },{
        question: "Who thought they had a “squish” on Oblina?",
        imgSrc: "assets/images/Krumm.png",
        choiceA: "true",
        choiceB: "false",
        choiceC: "false",
        correct: "A"
    },{
        question: "What happens during the regular Festival of the Festering Moon?",
        imgSrc: "assets/images/partingMonsters.jpeg",
        choiceA: "false",
        choiceB: "true",
        choiceC: "false",
        correct: "B"
    }
];

var questionI= triviaQ.length - 1;
var currentQ= 0;
var count= 0;
var questionTime= 10;
var score= 0;

function answerQuestion() {
    var q= triviaQ[currentQ];

    triviaDisplay.innerHTML= "<p>"+ q.question +"</p>";
    qImg.innerHTML= "<img src="+ q.imgSrc +">";
    choiceA.innerHTML= q.choiceA; 
    choiceB.innerHTML= q.choiceB; 
    choiceC.innerHTML= q.choiceC; 
}
$("#startb").on('click', startTrivia);

function startTrivia(event){
    event.preventDefault();
    // start.style('visibility', "hidden");
    var startEle = $("#start")
    console.log(startEle);
    startEle.hide();

    answerQuestion();
    questions.style.display= "block";
}

$(document).on('click', '.choices',function(){
    console.log("clicked");
})
function checkAnswer(answer) {
    if (answer == questions[currentQ].correct) {
        score++
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    count= 0;
    if (currentQ < lastQuestion) {
        currentQ++;
        questionI();
    }
}
