/**
 * Whatsapp API to send msgs with data to the specified number 
 */

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


function sendWhatsappMsg(){
    var phoneNumber = '263717923425';
    var msg = `${greeting} Mr Nyaruni. I got reference from your portfolio, i would like to inquire about`;
    var encodeMsg = encodeURIComponent(msg);

    var apiLink = `https://wa.me/${phoneNumber}?text=${encodeMsg}`;

    window.open(apiLink, '_blank');
}