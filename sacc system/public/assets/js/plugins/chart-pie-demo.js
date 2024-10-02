// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

/*
fullpayment = studentInitialAmount - StudentRemainingAmount
avgpayment >= 70% dead12345
lowpayment <= 50
*/
//enrolled
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

// boys
var schoolTotalBoys = enrolled.form1BoysTotal +
                enrolled.form2BoysTotal +
                enrolled.form3BoysTotal +
                enrolled.form4BoysTotal +
                enrolled.form5BoysTotal +
                enrolled.form6BoysTotal;
// girls
var schoolTotalGirls = enrolled.form1GirlsTotal +
                enrolled.form2GirlsTotal +
                enrolled.form3GirlsTotal +
                enrolled.form4GirlsTotal +
                enrolled.form5GirlsTotal +
                enrolled.form6GirlsTotal;
// total gender
var schoolTotalGender = schoolTotalBoys + schoolTotalGirls;

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
                       
var schoolTotalProjectedRevenue = schoolTotalPaid + schoolTotalUnpaid;
function calculateAndSetIncomePercentage(paid, total, elementId) {
    var element = document.getElementById(elementId);
    var incomePercentage = Math.floor((paid / total) * 100);
    element.textContent = incomePercentage;
  }
/*
function calculateGenderPercentage(schoolTotalBoys,schoolTotalGender) {
    var genderPercentage = Math.floor((schoolTotalBoys / schoolTotalGender) * 100);
    element.textContent = genderPercentage;
}
*/
  calculateAndSetIncomePercentage(form1TotalPaid, form1Total, 'perc1');
  calculateAndSetIncomePercentage(form2TotalPaid, form2Total, 'perc2');
  calculateAndSetIncomePercentage(form3TotalPaid, form3Total, 'perc3');
  calculateAndSetIncomePercentage(form4TotalPaid, form4Total, 'perc4');
  calculateAndSetIncomePercentage(form5TotalPaid, form5Total, 'perc5');
  calculateAndSetIncomePercentage(form6TotalPaid, form6Total, 'perc6');
 // calculateGenderPercentage(schoolTotalBoys, schoolTotalGender, 'perc7');

//numbers
function setElementTextContent(elementId, value) {
    var element = document.getElementById(elementId);
    element.textContent = value;
  }
  
  setElementTextContent('form1TotalStudents', form1Total);
  setElementTextContent('form1Paid', form1TotalPaid);
  setElementTextContent('form1Unpaid', form1TotalUnpaid);
  
  setElementTextContent('form2TotalStudents', form2Total);
  setElementTextContent('form2Paid', form2TotalPaid);
  setElementTextContent('form2Unpaid', form2TotalUnpaid);
  
  setElementTextContent('form3TotalStudents', form3Total);
  setElementTextContent('form3Paid', form3TotalPaid);
  setElementTextContent('form3Unpaid', form3TotalUnpaid);
  
  setElementTextContent('form4TotalStudents', form4Total);
  setElementTextContent('form4Paid', form4TotalPaid);
  setElementTextContent('form4Unpaid', form4TotalUnpaid);
  
  setElementTextContent('form5TotalStudents', form5Total);
  setElementTextContent('form5Paid', form5TotalPaid);
  setElementTextContent('form5Unpaid', form5TotalUnpaid);
  
  setElementTextContent('form6TotalStudents', form6Total);
  setElementTextContent('form6Paid', form6TotalPaid);
  setElementTextContent('form6Unpaid', form6TotalUnpaid);

/*

  setElementTextContent('schoolTotalGender', schoolTotalGender);
  setElementTextContent('schoolTotalBoys', schoolTotalBoys);
  setElementTextContent('schoolTotalGirls', schoolTotalGirls);
 
*/
// Pie Chart Payment overview homepage
var ctx = document.getElementById("myPieChart1");
var ctx2 = document.getElementById("myPieChart2");
var ctx3 = document.getElementById("myPieChart3");
var ctx4 = document.getElementById("myPieChart4");
var ctx5 = document.getElementById("myPieChart5");
var ctx6 = document.getElementById("myPieChart6");
//var ctx7 = document.getElementById("myPieChart7");

var chartData = [
  { ctx: ctx, paid: form1TotalPaid, unpaid: form1TotalUnpaid },
  { ctx: ctx2, paid: form2TotalPaid, unpaid: form2TotalUnpaid },
  { ctx: ctx3, paid: form3TotalPaid, unpaid: form3TotalUnpaid },
  { ctx: ctx4, paid: form4TotalPaid, unpaid: form4TotalUnpaid },
  { ctx: ctx5, paid: form5TotalPaid, unpaid: form5TotalUnpaid },
  { ctx: ctx6, paid: form6TotalPaid, unpaid: form6TotalUnpaid }
  //{ ctx: ctx7, paid: schoolTotalPaid, unpaid: schoolTotalUnpaid }
];
  chartData.forEach(function(data) {
    new Chart(data.ctx, {
      type: 'doughnut',
      data: {
        labels: ["%Paid", "%Unpaid"],
        datasets: [{
          data: [data.paid, data.unpaid],
          borderColor: ['red', 'red'],
          backgroundColor: ['rgb(15, 182, 79)', 'red'],
          hoverBackgroundColor: ['rgb(15, 182, 79)', 'red'],
          hoverBorderColor: ['rgb(15, 182, 79)', 'red'],
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgba(65, 225, 65, 0.308)",
          color: 'black',
          bodyFontColor: "black",
          borderColor: 'silver',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });
  });
/* schoolHomePagePy
    FinanceAnalyticsPyChart

*/

//xulTotal[yearly],formTotal,genderTotal
//IncomepercentageForm1

