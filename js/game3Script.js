var WordGuess = [
    {
        display: "A rainforest located in South America sharing the name with a popular online retailer ",
        answer: "Amazon"
    },
    {
        display: "What do tree's produce for our atmosphere",  // Questions that are displayed //
        answer: "Oxygen" // correct Anwsers //
    },
    {
        display: "Harmful acts that damage the earths atmosphere\n\nHint: Starts with P",
        answer: "Pollution"
    },
    {
        display: "Capable of being decomposed by bacteria \nor other living organisms and thereby avoiding pollution",
        answer: "Biodegradable"
    },
    {
        display: "A chermical compound that causes pollution\n\nHint: Carbon",
        answer: "Carbon dioxide"
    },
    {
        display: "An object can be collected and remanufactured into new products\n\nHint: Self explanatory",
        answer: "recycled"
    },
    {
        display: "able to be maintained at a certain rate or level.\n\nHint: Sustain",
        answer: "Sustainable"
    },
    {
        display: "A eight letter word, meaning to be able to use more than once\n\nHint: 'This enegry type is easily reused and is very sustainable'",
        answer: "Reusable"
    },
    {
        display: "Renewable, biodegradable fuel manufactured domestically.\nFrom vegetable oils, animal fats, or recycled restaurant grease.\n\nHint: Some cars use this tye of non-polluting material",
        answer: "Biodiesel"
    },

    // Can easily add more guessing questions buy using the brackets and creating more attributes //
];

var Starter = 0;

function doSomething() {
    if (Starter < WordGuess.length) {
        var currentWord = WordGuess[Starter];
        var Guess = prompt("Guess the word:\n" + currentWord.display);

        if (Guess !== null) {
            if (Guess.toLowerCase() === currentWord.answer.toLowerCase()) {
                alert("Correct! Good Job!");
                Starter++;
                doSomething();
            } else {
                alert("Wrong! The correct answer is: " + currentWord.answer);
            }
        }
    } else {
        alert("Congrats on completing the game.");
    }
}