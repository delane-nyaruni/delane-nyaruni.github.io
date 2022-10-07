//zesa token 3325 6145 7821 3221 7909

var today = new Date();
var year = today.getFullYear();


var Year = new Date();
Year = document.getElementById(currentYear);


//operating hrs
var openingHrs = 0800,
    closingHrs = 1700;

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}