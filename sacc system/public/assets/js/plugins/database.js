var enrolled = {
    form1BoysTotal:10,
    form1GirlsTotal:12,
    form2BoysTotal:12,
    form2GirlsTotal:10,
    form3BoysTotal:80,
    form3GirlsTotal:75,
    form4BoysTotal:80,
    form4GirlsTotal:75,
    form5BoysTotal:80,
    form5GirlsTotal:75,
    form6BoysTotal:80,
    form6GirlsTotal:75,
};

/*
// boys
var schoolTotalBoys = form1BoysTotal +
                form2BoysTotal +
                form3BoysTotal +
                form4BoysTotal +
                form5BoysTotal +
                form6BoysTotal;
// girls
var schoolTotalGirls = form1GirlsTotal +
                form2GirlsTotal +
                form3GirlsTotal +
                form4GirlsTotal +
                form5GirlsTotal +
                form6GirlsTotal;
// total gender
var schoolTotalGender = schoolTotalBoys + schoolTotalGirls;
*/
//payment 
var paymentType = {
    fees:{paid:{
    'form1Boys':10,
    'form1Girls':12,
    'form2Boys':8,
    'form2Girls':8,
    'form3Boys':19,
    'form3Girls':18,
    'form4Boys':10,
    'form4Girls':17,
    'form5Boys':18,
    'form5Girls':13,
    'form6Boys':17,
    'form6Girls':18},
        unPaid:{
    'form1Boys':2,
    'form1Girls':0,
    'form2Boys':4,
    'form2Girls':2,
    'form3Boys':19,
    'form3Girls':18,
    'form4Boys':10,
    'form4Girls':17,
    'form5Boys':18,
    'form5Girls':3,
    'form6Boys':14,
    'form6Girls':18}},
    uniform:{paid:null,
        unPaid:null},
};
//total paid with enrolled
var form1TotalPaid = paymentType.fees.paid.form1Boys + paymentType.fees.paid.form1Girls;
var form1TotalUnpaid =paymentType.fees.unPaid.form1Boys +  paymentType.fees.unPaid.form1Girls;
var form2TotalPaid =paymentType.fees.paid.form2Boys + paymentType.fees.paid.form2Girls;
var form2TotalUnpaid =paymentType.fees.unPaid.form2Boys + paymentType.fees.unPaid.form2Girls;
var form3TotalPaid =paymentType.fees.paid.form3Boys + paymentType.fees.paid.form3Girls;
var form3TotalUnpaid =paymentType.fees.unPaid.form3Boys + paymentType.fees.unPaid.form3Girls;
var form4TotalPaid =paymentType.fees.paid.form4Boys + paymentType.fees.paid.form4Girls;
var form4TotalUnpaid =paymentType.fees.unPaid.form4Boys + paymentType.fees.unPaid.form4Girls;
var form5TotalPaid =paymentType.fees.paid.form5Boys + paymentType.fees.paid.form5Girls;
var form5TotalUnpaid =paymentType.fees.unPaid.form5Boys + paymentType.fees.unPaid.form5Girls;
var form6TotalPaid =paymentType.fees.paid.form6Boys + paymentType.fees.paid.form6Girls;
var form6TotalUnpaid =paymentType.fees.unPaid.form6Boys + paymentType.fees.unPaid.form6Girls;

var form1Total = form1TotalPaid + form1TotalUnpaid;
var form2Total = form2TotalPaid + form2TotalUnpaid;
var form3Total = form3TotalPaid + form3TotalUnpaid;
var form4Total = form4TotalPaid + form4TotalUnpaid;
var form5Total = form5TotalPaid + form5TotalUnpaid;
var form6Total = form6TotalPaid + form6TotalUnpaid;
//calc total paid students
var schoolTotalPaid = form1TotalPaid +
                    form2TotalPaid +
                    form3TotalPaid +
                    form4TotalPaid +
                    form5TotalPaid + 
                    form6TotalPaid;

//calc total paid students
var schoolTotalUnpaid = form1TotalUnpaid +
                        form2TotalUnpaid +
                        form3TotalUnpaid +
                        form4TotalUnpaid +
                        form5TotalUnpaid +
                        form6TotalUnpaid;







                        {   // @ database.js reference prototype
                            // get all the students in the classes according to form & gender for data granulation & analysis
                            var studentClass = {
                                form1Boys: 125,
                                form1Girls: 130,
                                form2Boys: 124,
                                form2Girls: 129,
                                form3Boys: 128,
                                form3Girls: 123,
                                form4Boys: 127,
                                form4Girls: 122,
                                form5Boys: 120,
                                form5Girls: 129,
                                form6Boys: 118,
                                form6Girls: 128,
                            }
                            
                            // get all the boys number in the school
                            var allBoys = document.getElementById("allBoys");
                            var allBoysTotal = 
                                    studentClass.form1Boys + 
                                    studentClass.form2Boys + 
                                    studentClass.form3Boys +
                                    studentClass.form4Boys + 
                                    studentClass.form5Boys +
                                    studentClass.form6Boys;
                            allBoys.innerText = allBoysTotal;
                            
                            // get all the boys number in the school
                            var allGirls = document.getElementById("allGirls");
                            var allGirlsTotal = 
                                    studentClass.form1Girls + 
                                    studentClass.form2Girls + 
                                    studentClass.form3Girls +
                                    studentClass.form4Girls + 
                                    studentClass.form5Girls +
                                    studentClass.form6Girls;
                            allGirls.innerText = allGirlsTotal;
                            
                            // get total enrolled
                            var totalEnrolled = document.getElementById("allStudents");
                            var allEnrolledTotal = allBoysTotal + allGirlsTotal;
                            totalEnrolled.innerText = allEnrolledTotal;
                            
                            
                            /*
                            function paid(form,amount,term,year)
                                fullpayment[a,t,y] = (TermFullAmount[a,t,y] - studentPaidAmount[a,t,y])
                                avgpayment >= 70%
                                lowpayment <= 50
                            
                            
                            paid = totalEnrolled - paid() 
                            
                            */
                            
                            // get paid
                            var Paid = document.getElementById("paid");
                            //var TotalPaid = fullpayment + avgpayment;
                            Paid.innerText = 500;
                            
                            
                            }   // eo @ database.js reference prototype