function validateAuth() {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const role = document.getElementById('role').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username.trim() !== '' && password.trim() !== '') {
            if ((role === 'student') && (username === "student@gmail.com" && password === "1234")) {
                successPopupMsg();// handle gracefully the error messages
                studentAuth();
            } else if ((role === 'landlord') && (username === "landlord@gmail.com" && password === "1234")) {
                successPopupMsg();
                landlordAuth();
            }
            else{
                errorPopupMsg();
                }
        } else{
            emptyFieldsPopupMsg();
            }


            function successPopupMsg(){
                document.getElementById('successPopup').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('successPopup').style.display = 'none';
                }, 2000);
            }
        
            function errorPopupMsg(){
                document.getElementById('errorPopup').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('errorPopup').style.display = 'none';
                }, 3000); // 3 seconds before hiding the error message
            }
        
            function emptyFieldsPopupMsg(){
                document.getElementById('emptyFields').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('emptyFields').style.display = 'none';
                }, 3000); // 3 seconds before hiding the error message
            }
        
    });
}
function landlordAuth() {
    window.location.href = '../../entities/landlord/dashboard.jsp';
    window.onload(successPopupMsg());
}

function studentAuth() {
    window.location.href = '../../entities/student/dashboard.jsp';
}

// quit system
function quit(){
    window.close();
}

function goToHomepage(){
    location.href = 'about:home';
}