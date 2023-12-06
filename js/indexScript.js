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

document.getElementById("renewableTitle").innerHTML = "The few common sources of renewable energy -"

document.getElementById("solarEngergy").innerHTML = "<dt>SOLAR ENERGY:</dt> <dd>Solar energy is the most abundant of energy resource and can even be harnessed in cloudy weather.</dd>"

document.getElementById("windEnergy").innerHTML = "<dt>WIND ENERGY:</dt> <dd>Wind energy harnesses the kinetic energy of moving air by using large wind turbines found on land, in sea or freshwater.</dd>"

document.getElementById("geothermalEnergy").innerHTML = "<dt>GEOTHERMAL ENERGY:</dt> <dd>Geothermal energy utilizes accessible thermal energy from Earth’s interior. Heat is extracted from geothermal reservoirs using wells.</dd>"

document.getElementById("hydroPower").innerHTML = "<dt>HYDROPOWER:</dt> <dd>Hydropower harnesses the energy of water moving from higher to lower elevations. It can be generated from reservoirs and rivers.</dd> <br>Reference link: https://www.un.org/en/climatechange/what-is-renewable-energy"

function changeText() {
    document.getElementById("thisDiv").innerHTML = "<h3>Renewable energy is energy derived from natural sources that are replenished at <br> a higher rate than they are consumed. Sunlight and wind, for example, are such <br> sources that are constantly being replenished. Renewable energy sources are <br> plentiful and all around us. <br><br> Reference link: https://www.un.org/en/climatechange/what-is-renewable-energy </h3>";
}