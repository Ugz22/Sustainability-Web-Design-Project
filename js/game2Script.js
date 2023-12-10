//"onclick" is used at the end of the "img" so that the webpage knows to do something when that image is clicked on //
// Button I made using pixlr can be found here: https://imgur.com/user/ManThingManMan/posts its great I know //
    
var game = {
                
// game is our varible //
// declaring the questions "q1, q2, q3...etc" is the attribute of that variable // 
// "{" attribute basically opens the storage of the attribute, "}" basically is a closing tag telling the webpage it is the end of the attribute's storage //
                
    q1: {
        quest: "What is not a sustainable source of energy?\n",
        opt: ["Coal", "Solar", "Water", "Wind"],
        concluder: "Coal"
    },
    q2: {
        quest: "Which one of these materials is recyclable?\n",
        opt: ["Styrofoam", "Bubble Wrap", "Wax", "Plastic"],
        concluder: "Plastic"
    },
    q3: {
        quest: "TRUE OR FALSE: Climate change can really affect the Earth relating to things like tides, temperature, and the atmosphere.\n",
        opt: ["True", "False"],
        concluder: "True"
    },
    q4: {
        quest: "Sustainable resources help to keep the environment clean and healthy. Which one of these is a sustainable resource?\n",
        opt: ["Fossil Fuels", "Oil And Gas", "Solar Energy", "Human Sacrifice"],
        concluder: "Solar Energy"
    },
    q5: {
        quest: "What is one way we can decrease our carbon footprint?\n",
        opt: ["Diesel engines in cars", "Nuclear Energy", "Not sweating as much", "Electric Transport"],
        concluder: "Electric Transport"
    
        // The questions are copy and pasted with the attribute changed with the aid of a number added after the "q" and to differentiate between them"
    },
    q6: {
        quest: "Which energy from the following is the most clean?\n",
        opt: ["Pertoleum", "Unsustainable Bioenergy", "Waste-To-Energy", "Nuclear Energy"],
        concluder: "Nuclear Energy"
    },
    q7: {
        quest: "Which is not an organic energy source?\n",
        opt: ["Biomass", "Wind", "Biofuels", "Carbon"],
        concluder: "Carbon"
    },
    q8: {
        quest: "'Fact Check This Statement; at least 9 out of 10 people across the world are living in places with polluted air.'\n",
        opt: ["Fact", "Cap"],
        concluder: "Fact"
    },
    q9: {
        quest: "'Fact Check This Statement; Climate change is caused by how close the earth is to the sun during rotation'\n",
        opt: ["Fact", "Cap"],
        concluder: "Cap"
    },
    q10: {
        quest: "Which country out of the given options produces the most pollution?\n",
        opt: ["United States", "Russia", "Japan", "Argentina"],
        concluder: "United States"
    },
        };

// the "\n" basically has the same function as a "<br> tag in html" // 

var begin = 1; // Basically says "Start with the first question or "q" //
    
function startGame() {
    if (begin <= Object.keys(game).length) {
        var current = game["q" + begin];
        var userGuess = prompt(current.quest + "\nYour options are: " + current.opt.join(", "));
    
    if (userGuess !== null) {
    if (userGuess.toLowerCase() === current.concluder.toLowerCase()) {
        alert("That is correct Nice!");
        begin++;
        startGame(); // This line allows the next question to be loaded after the previous is answered //
    } else {
        alert("Wrong! Please Try Again! \nThe correct answer is: " + current.concluder);
        // This allows the page to tell the user that the question they answered is wrong, then adds the correct anwser(s) to the end of the prompt //
    }
        }
            } else {
                alert("You completed the game! Thank you!");
                }
            }
