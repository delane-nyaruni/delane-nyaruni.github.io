function validate(tryPassword) {
    tryPassword = 3;
    console.log(tryPassword);
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    if (userName === "delane" && password === "1234") {
        alert("login success");
        //login page redirect
        newPage();

    } else {
        alert("Invalid login name or password");
        validate(n - 1);
    }

}



function newPage() {
    location.href = '../student portal/index.html';
}