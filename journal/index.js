function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "delane" && password === "12345") {
        alert("login success");
        //login page redirect
        newPage();
    } else {
//        alert("login failed");
        alert("login failed");
        location.href = 'index.html';
    }
}

function newPage() {
    location.href = 'journal.html';
}

function signout() {
    alert("Signing Out...");
    location.href = 'index.html';
    //TODO: create a timeObject to use given different msgs from an array 
    //randomly,can choose by date say friday have a great weknd, monday have a great week,
    //wednesday how is your wk going
    //show time
}