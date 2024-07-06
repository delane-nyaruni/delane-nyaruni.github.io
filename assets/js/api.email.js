/**
 *  email client API to send msg with data to the specified recipientEmail
 */


//var recipientEmail = 'lusnerdelane@gmail.com';
var recipientEmail = 'delaneoncodes@gmail.com';

var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Hello!';
}

function sendEmailMsg(){
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;
    var emailBody = document.getElementById('emailBody').value;
    var msg = `${greeting} Mr Nyaruni. I got reference from your portfolio, i would like to inquire about`;

    var encodeMsg = encodeURIComponent(msg);
    var encodeuserName = encodeURIComponent(userName);
    var encodeemailBody = encodeURIComponent(emailBody);

    var apiLink = `mailto:${recipientEmail}?from=${userEmail}&subject=${encodeuserName}&body=${encodeMsg} ${encodeemailBody}`;

    window.location.href = apiLink;
//    window.open(apiLink, '_blank');
}