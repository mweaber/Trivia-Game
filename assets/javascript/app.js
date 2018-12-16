var correct = 0;
var incorrect = 0;


var question1 = {
    question: "Who is the current Florida Panthers captain?",
    pick1: "Roberto Luongo",
    pick2: "Aaron Ekblad",
    pick3: "Aleksander Barkov",
    pick4: "Vincent Trocheck"
}
var question2 = {
    question: "Who is the mascot of the Florida Panthers?",
    pick1: "Gritty",
    pick2: "Stanley C. Panther",
    pick3: "Pauly Panther",
    pick4: "Douglas Dougerson"
}
var question3 = {
    question: "In what division do the Florida Panthers play in?",
    pick1: "Atlantic",
    pick2: "Central",
    pick3: "Metropolitan",
    pick4: "Pacific"
}
var question4 = {
    question: "In what conference do the Florida Panthers play in?",
    pick1: "Western",
    pick2: "American",
    pick3: "Canadian",
    pick4: "Eastern"
}
var question5 = {
    question: "In what year were the Florida Panthers founded?",
    pick1: "1993",
    pick2: "1990",
    pick3: "2005",
    pick4: "1989"
}
var question6 = {
    question: "In what city do the Florida Panthers play in?",
    pick1: "Dade",
    pick2: "Jacksonville",
    pick3: "Sunrise",
    pick4: "Port St. Lucie"
}
var question7 = {
    question: "Who is the leading goal scorer in Florida Panthers history?",
    pick1: "Olli Jokinen",
    pick2: "Pavel Bure",
    pick3: "Stephen Weiss",
    pick4: "Scott Mellanby"
}
var question8 = {
    question: "Which Florida Panther player has the most goals in a season with 59?",
    pick1: "Nathan Horton",
    pick2: "Victor Kozlov",
    pick3: "Radek Dvorak",
    pick4: "Pavel Bure"
}
var question9 = {
    question: "What is tossed onto the ice after a home win?",
    pick1: "Rubber rats",
    pick2: "Opposing fans",
    pick3: "Pucks",
    pick4: "Hats"
}
var question10 = {
    question: "Which player has the nickname 'Sasha'?",
    pick1: "Keith Yandle",
    pick2: "Aleksander Barkov",
    pick3: "Nick Bjugstad",
    pick4: "Michael Matheson"
}

function createQ() {
    function addQuestion1() {
        $("#question1").text(question1.question);
        $("#Lu").text(question1.pick1);
        $("#Ekblad").text(question1.pick2);
        $("#Barkov").text(question1.pick3);
        $("#Trocheck").text(question1.pick4);
    }
    function addQuestion2() {
        $("#question2").text(question2.question);
        $("#Grit").text(question2.pick1);
        $("#Stankley").text(question2.pick2);
        $("#Paul").text(question2.pick3);
        $("#Doug").text(question2.pick4);
    }
    function addQuestion3(){
        $("#question3").text(question3.question);
        $("#Atl").text(question3.pick1);
        $("#Cen").text(question3.pick2);
        $("#Met").text(question3.pick3);
        $("#Pac").text(question3.pick4);
    }
    function addQuestion4(){
        $("#question4").text(question4.question);
        $("#west").text(question4.pick1);
        $("#amer").text(question4.pick2);
        $("#can").text(question4.pick3);
        $("#east").text(question4.pick4);
    }
    function addQuestion5(){
        $("#question5").text(question5.question);
        $("#1993").text(question5.pick1);
        $("#1990").text(question5.pick2);
        $("#2005").text(question5.pick3);
        $("#1989").text(question5.pick4);
    }
    function addQuestion6(){
        $("#question6").text(question6.question);
        $("#dade").text(question6.pick1);
        $("#jack").text(question6.pick2);
        $("#sun").text(question6.pick3);
        $("#port").text(question6.pick4);
    }
    function addQuestion7(){
        $("#question7").text(question7.question);
        $("#olli").text(question7.pick1);
        $("#pavel").text(question7.pick2);
        $("#stephen").text(question7.pick3);
        $("#scott").text(question7.pick4);
    }
    function addQuestion8(){
        $("#question8").text(question8.question);
        $("#horton").text(question8.pick1);
        $("#kozlov").text(question8.pick2);
        $("#dvorak").text(question8.pick3);
        $("#bure").text(question8.pick4);
    }
    function addQuestion9(){
        $("#question9").text(question9.question);
        $("#rats").text(question9.pick1);
        $("#fans").text(question9.pick2);
        $("#pucks").text(question9.pick3);
        $("#hat").text(question9.pick4);
    }
    function addQuestion10(){
        $("#question10").text(question10.question);
        $("#yand").text(question10.pick1);
        $("#bark").text(question10.pick2);
        $("#bjug").text(question10.pick3);
        $("#math").text(question10.pick4);
    }
    addQuestion1();
    addQuestion2();
    addQuestion3();
    addQuestion4();
    addQuestion5();
    addQuestion6();
    addQuestion7();
    addQuestion8();
    addQuestion9();
    addQuestion10();
}

function winsCheck() {
    var q1btn3 = document.getElementById("q1btn3");
    var q2btn2 = document.getElementById("q2btn2");
    if (q1btn3.checked) {
        correct++
        // alert("correct"); COMPLETE
    } else {
        incorrect++
        // alert("try again next time"); COMPLETE
    }
    if (q2btn2.checked) {
        correct++;
    } else {
        incorrect++;
    }
    results();
}

function results() {
    $("#right").text(" " + correct);
    $("#wrong").text(" " + incorrect);
}

$(document).ready(function () {
    

    function gameStart() {
        $("#startButton").on("click", function () {
            // $("#replayButton").hide(); Replay button to add later
            var timeRemain = 11;
            var countTime = setInterval(timer, 1000);
            function timer() {
                if (timeRemain <= 0) {
                    clearInterval(countTime);
                    winsCheck();
                    // $("#replayButton").show(gameStart()); Replay button to add later

                } else {
                    timeRemain = timeRemain - 1;
                    document.getElementById("timer").textContent = timeRemain + " secs left";
                }
            }
        });

    }
    gameStart();
    createQ();
    results();
    addQuestion1();
    addQuestion2();

});


