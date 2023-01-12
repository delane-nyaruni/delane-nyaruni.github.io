    function register() {
    
        var studentName = document.getElementById("studentName").value;
        var studentSurname = document.getElementById("studentSurname").value;
        //let middleName = document.getElementById("middleName").value;

        //https://api.Whatsapp.com/send?phone=263&text=Student%20Name:

        if (studentName === "" || studentSurname === "") {
            alert("enter all details to register");
        } else {
            //whatsapp API
             location.href = `https://api.Whatsapp.com/send?phone=+263775509530?text=Student%20Name:`+studentName+ `<br>` +` Student%20Surname:`+studentSurname;

            //portfolio page redirect
            registeredSuccess();
        }
        //update content to reglog API test 
        //document.getElementById("named").innerHTML = studentName;
        //document.getElementById("surnamed").innerHTML = studentSurname;

    } //eo register()


    function portfolioPage() {
        alert("quiting registration");
        location.href = 'home.html';
    }

    function registeredSuccess() {
        alert("registered successfully");
        location.href = 'home.html';
    }