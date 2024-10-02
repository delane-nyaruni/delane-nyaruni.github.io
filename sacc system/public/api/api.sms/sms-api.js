'use strict';

//global variables
var countryCode = '263';
var recipientNum = '784974553'; // get user number from login()

/*
var UserInput = (()=>{document.getElementById('pay');
},2);
*/

//econet call back
function econetCallBackSmsApiCall(){
    var smsCallBackCode = '*555*';
    var terminateCallBack = '#'
    var callBack = `${smsCallBackCode}${countryCode}${recipientNum}${terminateCallBack}`;
    console.log(callBack);
   
}

//netone call back
function netoneCallBackSmsApiCall(){
    var smsCallBackCode = '*171*8*2*';
    var terminateCallBack = '*1#'
    var callBack = `${smsCallBackCode}${countryCode}${recipientNum}${terminateCallBack}`;
    var encodeNum = encodeURI(callBack);
    console.log(encodeNum);
}

// test api call
econetCallBackSmsApiCall();
// netoneCallBackSmsApiCall();

// 24hr test api call rate limit per service provider
var econetCallBackSmsApiCallLimit = 5;
if(econetCallBackSmsApiCall < econetCallBackSmsApiCallLimit){
    for (let i = 0; i <= econetCallBackSmsApiCallLimit; i++) {
    // test econet api call
    econetCallBackSmsApiCall();     
    
    // test econet api call
    if(econetCallBackSmsApiCall === econetCallBackSmsApiCallLimit){
        console.log('You have exhausted todays econet sms API calls');   
    }
    }
}