function helloVisitor() {
    var morning = false;
    if (morning) {
        alert("Good Morning, visitor");
    } else {
        alert("Hello, Welcome to Splendid Academy website");
    }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


//vibrating api in jquery
$("#vibrate").click(function() {
    navigator.vibrate([500, 50, 100, 50, 500]);
});