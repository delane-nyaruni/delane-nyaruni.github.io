// import  * as paymentData from '../api/payment-api';
/**
 * import data for payment
 * 
 * clear browser cache | webappchache or dir cache api
 * name = Add Payments
 * keep alive per session
 */ 

// 
var submitPaymentInfo = {
    studentName:'adrian',
    studentSurname: 'MOYO',
    studentForm: 3,
    studentClass:1,
    paymentType:['USD','SWIPE'],
    amountPaid:{
        firstTerm: [8002, 0],
        secTerm: [370, 0],
        thirdTerm: [390, 0]
    } 
};

// make payment greater than zero dollars & clear the first zero if placed by user 
// push sales subtrat from database 7 return 

/**
 * confirm data variables
 */
var studentPaymentName = submitPaymentInfo.studentName.toUpperCase();
var confirmStudentName = document.getElementById('confirmStudentName'); //use .value when getingdata from the fields
confirmStudentName.textContent = studentPaymentName;

var confirmStudentSurname = document.getElementById('confirmStudentSurname'); //use .value when getingdata from the fields
confirmStudentSurname.textContent = submitPaymentInfo.studentSurname.toUpperCase();

var confirmStudentForm = document.getElementById('confirmStudentForm'); //use .value when getingdata from the fields
confirmStudentForm.textContent = submitPaymentInfo.studentForm;

var confirmStudentClass = document.getElementById('confirmStudentClass'); //use .value when getingdata from the fields
confirmStudentClass.textContent = submitPaymentInfo.studentClass;

var confirmStudentPaymentMode = document.getElementById('confirmStudentPaymentMode'); //use .value when getingdata from the fields
confirmStudentPaymentMode.textContent = submitPaymentInfo.paymentType[1];

var confirmStudentAmountPaid = document.getElementById('confirmStudentAmountPaid').value; //use .value when getingdata from the fields
confirmStudentAmountPaid.textContent = submitPaymentInfo.amountPaid.firstTerm[0];


/**
 * printout data variables
 */
var printOutStudentId = document.getElementById('printOutStudentId');
printStudentId.textContent = 'printOutStudentId '

var printOutStudentName = document.getElementById('printOutStudentName'); //use .value when getingdata from the fields
printOutStudentName.outerHTML = studentPaymentName;

var printOutStudentSurname = document.getElementById('printOutStudentSurname'); //use .value when getingdata from the fields
printOutStudentSurname.textContent = "my surname";

var printOutStudentForm = document.getElementById('printOutStudentForm'); //use .value when getingdata from the fields
printOutStudentForm.textContent = "confirmStudentForm";

var printOutStudentClass = document.getElementById('printOutStudentClass'); //use .value when getingdata from the fields
printOutStudentClass.textContent = "confirmStudentClass";

var printOutStudentAmountPaid = document.getElementById('printOutStudentAmountPaid'); //use .value when getingdata from the fields
printOutStudentAmountPaid.textContent = "confirmStudentPaymentMode";

var printOutStudentPaymentMode = document.getElementById('printOutStudentPaymentMode'); //use .value when getingdata from the fields
printOutStudentPaymentMode.textContent = "confirmStudentAmountPaid";



function redirectToPaymentConf(){
    clearCache(); // clear page cache after a successfull transation
    location.href = './payment-conf.html';
}

function paymentQuery(){
    alert('Paymentss Approved');
    clearCache(); // clear page cache after a successfull transation
    redirectToPrintout();
}

function redirectToPrintout(){
    // iframe modal dismiss
    window.open("./printout.html");
   // location.href = './printout.html';
   window.close();
}

//clear browser cache
function clearCache(){
    window.location.reload(true);
}

