function validateAuth() {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if ((username.trim() !== '') && (password.trim() !== '')) {
            if (username === "saccadmin@gmail.com" && password === "1234") {
                successPopupMsg();
                adminAuth();
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
function adminAuth() {
    window.location.href = '../../dashboard.jsp';
}

// quit system
function quit(){
    window.close();
}

function goToHomepage(){
    location.href = 'about:home';
}