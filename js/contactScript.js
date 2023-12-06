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

//Form JavaScript
function sendButton() {

    var title = document.getElementById("userTitle").value

    var fName = document.getElementById("fName").value;

    var lName = document.getElementById("lName").value;

   //var email = document.getElementById("email").value;

    var message = document.getElementById("comment").value;

    var fullName = (title + " " + fName + " " + lName);

    event.preventDefault();

    var formMessage = "Hello " + fullName + " your message has been sent" + "<br><br> Thank you for your feedback" + "<br><br> Your Message: " + message

    document.getElementById("userMessage").innerHTML = formMessage;

    document.getElementById("formDiv").style.display = "none"
}

