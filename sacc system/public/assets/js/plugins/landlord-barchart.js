// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}
function getright(n){
    return n * n * n;
}
/*{// @ data exports    !!this code broke the program on run
*/
{   // @ database.js reference prototype
// get all the students in the classes according to form & gender for data granulation & analysis
 var month = {
    Jan: 12,
    Feb: 13,
    Mar: 12,
    Apr: 12,
    May: 18,
    Jun: 13,
    Jul: 17,
    Aug: 12,
    Sep: 10,
    Oct: 19,
    Nov: 11,
    Dec: 1,
};

// get all the boys number in the school
var properties = document.getElementById("properties");
var properties = 
        month.Jan + 
        month.Feb + 
        month.Mar +
		month.Apr +
        month.May + 
        month.Jun + 
        month.Jul + 
        month.Aug + 
        month.Sep +
        month.Oct +
        month.Nov +
        month.Dec +
        properties.innerText = month;

// get all the boys number in the school
var allGirls = document.getElementById("rooms");
var allGirlsTotal = 
        studentClass.form1Girls + 
        studentClass.form2Girls + 
        studentClass.form3Girls +
        studentClass.form4Girls + 
        studentClass.form5Girls +
        studentClass.form6Girls;
allGirls.innerText = allGirlsTotal;

// get total enrolled
var totalEnrolled = document.getElementById("totalPayments");
var allEnrolledTotal = allBoysTotal + allGirlsTotal;
totalEnrolled.innerText = allEnrolledTotal;


/*

*/

// get paid
var Paid = document.getElementById("paid");
//var TotalPaid = fullpayment + avgpayment;
Paid.innerText = 500;


}   // eo @ database.js reference prototype

// Bar Chart student overview homepage
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Total: ",
            backgroundColor: ["blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)"],
            hoverBackgroundColor: ["rgb(57, 57, 230)", "blue", "rgb(57, 57, 230)", "pink", "rgb(57, 57, 230)", "pink", "rgb(57, 57, 230)", "pink", "rgb(57, 57, 230)", "pink", "rgb(57, 57, 230)", "pink"],
            borderColor: "#4e73df",
            data: [ month.Jan,
                    month.Feb,
                    month.Mar,
                    month.Apr,
                    month.May, 
                    month.Jun, 
                    month.Jul, 
                    month.Aug, 
                    month.Sep,
                    month.Oct,
                    month.Nov,
                    month.Dec],
            paid: [212, 213, 202, 222, 211, 212, 211, 200, 110, 111, 112, 103],// change amount from object
            backgroundColorPaid: ["red", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)"],
        }],
    },
    options: {
        maintainAspectRatio: true,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            xAxes: [{
                time: {
                    unit: 'month',
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 6
                },
                maxBarThickness: 25,
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 300,
                    maxTicksLimit: 5,
                    padding: 10,
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return +number_format(value);
                    }
                },
                gridLines: {
                    color: "green",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            titleMarginBottom: 10,
            titleFontColor: 'black',
            titleFontSize: 14,
            backgroundColor: "rgba(65, 225, 65, 0.308)",
            bodyFontColor: "black",
            borderColor: 'silver',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
                label: function(tooltipItem, chart) {
                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + number_format(tooltipItem.yLabel);
                }
            }
        },
    }
});