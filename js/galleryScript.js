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



//JavaScript to display and hide different gallery sections
function blockDivs() {

    document.getElementById("pollutionDiv").style.display = "none";
    document.getElementById("solutionDiv").style.display = "none";
} //Hides gallery sections

function energyBtn() {

    document.getElementById("energyDiv").style.display = "block";
    document.getElementById("pollutionDiv").style.display = "none";
    document.getElementById("solutionDiv").style.display = "none";
} //On user input, will display the relevant gallery section

function pollutionBtn() {

    document.getElementById("energyDiv").style.display = "none";
    document.getElementById("pollutionDiv").style.display = "block";
    document.getElementById("solutionDiv").style.display = "none";
} //On user input, will display the relevant gallery section

function solutionBtn() {
    
    document.getElementById("energyDiv").style.display = "none";
    document.getElementById("pollutionDiv").style.display = "none";
    document.getElementById("solutionDiv").style.display = "block";
} //On user input, will display the relevant gallery section