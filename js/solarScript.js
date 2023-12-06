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


let send = document.querySelector("#send");
send.addEventListener("click", function() {
let selectedCheckboxes = document.querySelectorAll(".courses input[type=checkbox]:checked");
selectedCheckboxes.forEach(function(item) {
item.parentElement.style.display = "none";
    });
});
