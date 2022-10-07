function validate() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    if (userName === "delane" && password === "1234") {
        alert("login success");
        //login page redirect
        newPage();
    } else {
        alert("login failed");
    }

}


function newPage() {
 
    location.href = 'diary.html';
}

function signout(){
    alert("Signing Out...");
    location.href = 'index.html';
    //TODO: create a timeObject to use given different msgs from an array 
    //randomly,can choose by date say friday have a great weknd, monday have a great week,
    //wednesday how is your wk going
    //show time
}



