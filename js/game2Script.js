//JavaScript for scroll to the top button
let topButton = document.getElementById("topBtn");

//displays scroll to top button when user scrolls page by 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        topButton.style.display = "block";

    } else {
        topButton.style.display = "none";
    }
}

//Brings the user to the top of the page when scroll to the top button is clicked
function bringToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} //Different properties required for browser types

var gamequest = {
    q1: {
        quest: "What is a sustainable source of energy?",
        opt: ["Coal", "Electricity", "Water", "Wind"],
        concluder: "Wind"
    },
    q2: {
        quest: "Which one of these materials is recyclable?",
        opt: ["Styrofoam", "Bubble Wrap", "Cardboard", "Plastic"],
        concluder: "Plastic"
    },
    q3: {
        quest: "TRUE OR FALSE: Climate change can really affect the Earth relating to things like tides, temperature, and the atmosphere.",
        opt: ["True", "False"],
        concluder: "True"
    },
    q4: {
        quest: "Sustainable resources help to keep the environment clean and healthy. Which one of these is a sustainable resource?",
        opt: ["Fossil Fuels", "Nuclear Energy", "Solar Energy", "Human Sacrifice"],
        concluder: "Solar Energy"
    },
    
    // Can add more questions by saying q and then a number after it
};

var currentQuestionIndex = 1; // Starting with the first question

function startGame() {
    if (currentQuestionIndex <= Object.keys(gamequest).length) {
        var currentQuestion = gamequest["q" + currentQuestionIndex];
        var userAnswer = prompt(currentQuestion.quest + "\nOptions: " + currentQuestion.opt.join(", "));

        if (userAnswer !== null) {
            if (userAnswer.toLowerCase() === currentQuestion.concluder.toLowerCase()) {
                alert("Correct!");
                currentQuestionIndex++;
                startGame(); // Move to the next question
            } else {
                alert("Wrong! The correct answer is: " + currentQuestion.concluder);
                // You can handle what happens when the answer is wrong
            }
        }
    } else {
        alert("You completed the game! Thank you!");
    }
}
