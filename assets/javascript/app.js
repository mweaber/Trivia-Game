var correct = 0;
var incorrect = 0;
var timeRemain = 10;
var countTime = setInterval(timer, 1000);

var question1 = {
    question: "Who is the main protagonist of the game?",
    pick1: "Dragonball",
    pick2: "Herod",
    pick3: "Dragonborn",
    pick4: "Wabbajack"
}
var question2 = {
    question: "In which city is the Thieves Guild located?",
    pick1: "Markarth",
    pick2: "Riften",
    pick3: "Dagobah",
    pick4: "Whiterun"
}
var question3 = {
    question: "Where did the guard take an arrow?",
    pick1: "To the knee",
    pick2: "To the chest",
    pick3: "To the arm",
    pick4: "To the ear"
}
var question4 = {
    question: "What two ingredients mix to make a health potion?",
    pick1: "Cheese wheel and tomato",
    pick2: "Nightshade and Falmer Ears",
    pick3: "Banana and Strawberries",
    pick4: "Wheat and Imp Stool"
}
var question5 = {
    question: "Which wild animal had pincers and hides near water?",
    pick1: "Mudcrabs",
    pick2: "Wolf",
    pick3: "Daedric",
    pick4: "Troll"
}
var question6 = {
    question: "What is the highest point in the world?",
    pick1: "The Wall of the World",
    pick2: "The Peak of the Kingdom",
    pick3: "The Throat of the World",
    pick4: "Mountain of the Realm"
}
var question7 = {
    question: "Who is the Jarl of Whiterun?",
    pick1: "Jarl Balgruuf",
    pick2: "Jarl Scmarl",
    pick3: "Ulfric Stormcloak",
    pick4: "Sklad"
}
var question8 = {
    question: "Which component below is needed to enchant an item?",
    pick1: "Ingots",
    pick2: "Vials",
    pick3: "Reagent",
    pick4: "Soul Gem"
}
var question9 = {
    question: "What is a delicious treat in the game?",
    pick1: "Sweet Roll",
    pick2: "Cake",
    pick3: "Apple Pie",
    pick4: "Scones"
}
var question10 = {
    question: "Which is the guild of assassins?",
    pick1: "The Murder Club",
    pick2: "The Dark Brotherhood",
    pick3: "Shadow Lurkers",
    pick4: "The Black Hand"
}

function createQ() {

    $("#question1").text(question1.question);
    $("#Lu").text(question1.pick1);
    $("#Ekblad").text(question1.pick2);
    $("#Barkov").text(question1.pick3);
    $("#Trocheck").text(question1.pick4);

    $("#question2").text(question2.question);
    $("#Grit").text(question2.pick1);
    $("#Stankley").text(question2.pick2);
    $("#Paul").text(question2.pick3);
    $("#Doug").text(question2.pick4);

    $("#question3").text(question3.question);
    $("#Atl").text(question3.pick1);
    $("#Cen").text(question3.pick2);
    $("#Met").text(question3.pick3);
    $("#Pac").text(question3.pick4);

    $("#question4").text(question4.question);
    $("#west").text(question4.pick1);
    $("#amer").text(question4.pick2);
    $("#can").text(question4.pick3);
    $("#east").text(question4.pick4);

    $("#question5").text(question5.question);
    $("#1993").text(question5.pick1);
    $("#1990").text(question5.pick2);
    $("#2005").text(question5.pick3);
    $("#1989").text(question5.pick4);

    $("#question6").text(question6.question);
    $("#dade").text(question6.pick1);
    $("#jack").text(question6.pick2);
    $("#sun").text(question6.pick3);
    $("#port").text(question6.pick4);

    $("#question7").text(question7.question);
    $("#olli").text(question7.pick1);
    $("#pavel").text(question7.pick2);
    $("#stephen").text(question7.pick3);
    $("#scott").text(question7.pick4);

    $("#question8").text(question8.question);
    $("#horton").text(question8.pick1);
    $("#kozlov").text(question8.pick2);
    $("#dvorak").text(question8.pick3);
    $("#bure").text(question8.pick4);

    $("#question9").text(question9.question);
    $("#rats").text(question9.pick1);
    $("#fans").text(question9.pick2);
    $("#pucks").text(question9.pick3);
    $("#hat").text(question9.pick4);

    $("#question10").text(question10.question);
    $("#yand").text(question10.pick1);
    $("#bark").text(question10.pick2);
    $("#bjug").text(question10.pick3);
    $("#math").text(question10.pick4);
}

function winsCheck() {
    var q1btn3 = document.getElementById("q1btn3");
    var q2btn2 = document.getElementById("q2btn2");
    var q3btn1 = document.getElementById("q3btn1");
    var q4btn4 = document.getElementById("q4btn4");
    var q5btn1 = document.getElementById("q5btn1");
    var q6btn3 = document.getElementById("q6btn3");
    var q7btn1 = document.getElementById("q7btn1");
    var q8btn4 = document.getElementById("q8btn4");
    var q9btn1 = document.getElementById("q9btn1");
    var q10btn2 = document.getElementById("q10btn2");

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
    if (q3btn1.checked) {
        correct++
    } else {
        incorrect++;
    }
    if (q4btn4.checked) {
        correct++;
    } else {
        incorrect++;
    }
    if (q5btn1.checked) {
        correct++;
    } else {
        incorrect++;
    }
    if (q6btn3.checked) {
        correct++;
    } else {
        incorrect++;
    }
    if (q7btn1.checked) {
        correct++;
    } else {
        incorrect++;
    }
    if (q8btn4.checked) {
        correct++;
    } else {
        incorrect++;
    }
    if (q9btn1.checked) {
        correct++;
    } else {
        incorrect++;
    }
    if (q10btn2.checked) {
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
    $(".gameBoard").hide();
    $(".results").hide();

    function gameStart() {
        $("#startButton").on("click", function () {
            $("#startButton").hide();
            $(".gameBoard").show();
            document.getElementById("battleAudio").play();
            timeRemain = 45;
            countTime = setInterval(timer, 1000);
            function timer() {
                if (timeRemain <= 0) {
                    clearInterval(countTime);
                    $(".gameBoard").hide();
                    $(".results").show();
                    winsCheck();
                    document.getElementById("battleAudio").pause();
                } else {
                    timeRemain = timeRemain - 1;
                    document.getElementById("timer").textContent = timeRemain + " secs left";
                }
            }
        });

    }
    $("#playAgain").on("click", function () {
        $(".results").hide();
        correct = 0;
        incorrect=0
        document.getElementById("battleAudio").play();
        $('input[name="gender"]').prop('checked', false);
        $(".gameBoard").show();
        timeRemain = 45;
        countTime = setInterval(timer, 1000);
        function timer() {
            if (timeRemain <= 0) {
                document.getElementById("battleAudio").pause();
                clearInterval(countTime);
                $(".gameBoard").hide();
                $(".results").show();
                winsCheck();
            } else {
                timeRemain = timeRemain - 1;
                document.getElementById("timer").textContent = timeRemain + " secs left";
            }
        }
    });
    gameStart();
    createQ();
    results();
});


