// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

/*
fullpayment = studentInitialAmount - StudentRemainingAmount
avgpayment >= 70%
lowpayment <= 50


*/
// Get system time-up
var uptimeInSeconds = Math.floor(window.performance.now() / 1000);
var timeUp = new Date(uptimeInSeconds * 1000);
console.log('System Time-Up:', timeUp);

// Get RAM information *!!!
var memoryInfo = window.performance.memory;
var usedJSHeapSize = memoryInfo.usedJSHeapSize;
var totalJSHeapSize = memoryInfo.totalJSHeapSize;
console.log('Used JS Heap Size (RAM):', usedJSHeapSize);
console.log('Total JS Heap Size (RAM):', totalJSHeapSize);

// Get ROM information
var navigatorInfo = window.navigator;
var deviceMemory = navigatorInfo.deviceMemory;
console.log('Device Memory (ROM):', deviceMemory);

// Pie Chart Payment overview homepage
var ctx = document.getElementById("sysperfomance-metrics");
var users = 1087;
var ram = 414;
var memory = 70;
//var total = ((paid / total) * 360) + ((unpaid / total) * 360);
var paymentOverview = paid - unpaid;
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["#User", "%RAM", "%Disk"],
        datasets: [{
            data: [users, ram, memory], //change data sync with database
            borderColor: ['transparent', 'transparent', 'transparent'],
            backgroundColor: ['rgb(15, 182, 79)', 'red', 'grey'],
            hoverBackgroundColor: ['rgb(15, 182, 79)', 'red', 'grey'],
            hoverBorderColor: ['rgb(15, 182, 79)', 'red', 'grey'],
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