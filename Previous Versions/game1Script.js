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

var questions = [
    {
        question: "Replanting of trees is good for the enviroment.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Electric cars help to cut down on carbon emmissions, due to the lack of fuels required for them to run.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Cleaner energy solutions such as solar panels and electric motors are usually cheaper and more affordable to use.",
        options: ["True", "False"],
        correctAnswer: "False"
    }, 
    {
        question: "Nuclear energy believe it or not is the cleanest form of energy available.",
        options: ["True", "False"],
        correctAnswer: "True"
    }, 
    {
        question: "Greenhouse gasses trap heat in the atmosphere of the earth, sad gasses can also lead to global warming.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Sustainability is the practice of using natural resources responsibly, so they can support both present and future generations.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Sound pollution is the most dangerous type of pollution.",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Nitrogen oxides help to strengthen the earths atomosphere and serve as an effective force against pollution.",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Sound pollution only causes annoyance.",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "Global warming is a conspiracy theory made up by the government to distract you.",
        options: ["True", "False", "Maybe"],
        correctAnswer: "Maybe"
    },
    {
        question: "Combating pollution can lead to a more healthy and enviromentally friendlly future.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "''There are a vast ammout of materials that cause pollution, believe or not there are more than 10''",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "''Air pollution did not contribute to the spread of COVID-19''",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "''None of the worlds 100 biggest are able to meet the WHO updated guidelines''",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Earth's tempreature increases not due to climate change but due to the Earth rotating closer to the Sun each year.",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    
    // Add more by repeating the code above
];

var currentQuestionIndex = 0; // Starting with the first question

function startGame() {
    if (currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
        var userAnswer = prompt(currentQuestion.question + "\nOptions: " + currentQuestion.options.join(", "));

        if (userAnswer !== null) {
            if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
                alert("Correct!");
                currentQuestionIndex++;
                startGame(); // Move to the next question
            } else {
                alert("Wrong! Correct answer: " + currentQuestion.correctAnswer);
                // You can handle what happens when the answer is wrong
            }
        }
    } else {
        alert("Congrats you completed the quiz.");
        // You can add further actions or reset the game here
    }
}
