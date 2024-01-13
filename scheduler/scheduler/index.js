function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === '' && password === ''){
        alert(`Enter username & password`);
    }
    else if(username !== '' && password !== ''){
        alert(`Welcome ${username}`);
        //login page redirect
        newPage();
    }
    else{
        alert(`Invalid Entries`);
    }
}

function newPage() {
    location.href = 'scheduler.html';
}

function signout() {
    alert("Signing Out...");
    location.href = 'index.html';
}
