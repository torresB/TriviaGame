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
        choiceA: "Ocean",
        choiceB: "A vat of Saliva stored for a year",
        choiceC: "Flushing toilets during Super Bowl half time",
        correct: "C"
    },{
        question: "What is my name?",
        imgSrc: "assets/images/Ickis.png",
        choiceA: "Ickis ",
        choiceB: "Krum",
        choiceC: "Oblina",
        correct: "A"
    },{
        question: "Oblina was able to give nightmares to humans by doing what?",
        imgSrc: "assets/images/oblina.png",
        choiceA: "Singing lullabies",
        choiceB: "Hiding under their beds",
        choiceC: "Tickling their brains through their ears",
        correct: "C"
    },{
        question: "Who thought they had a “squish” on Oblina?",
        imgSrc: "assets/images/Krumm.png",
        choiceA: "Krum",
        choiceB: "The Gromble",
        choiceC: "Ickis",
        correct: "A"
    },{
        question: "What happens during the regular Festival of the Festering Moon?",
        imgSrc: "assets/images/partingMonsters.jpeg",
        choiceA: "The monsters get their adult stench",
        choiceB: "The monsters shed their skin",
        choiceC: "The Monsters have a feast",
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
