// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Payed", "Unpayed"],
        datasets: [{
            data: [85, 15], //change data sync with database
            borderColor: ['transparent', 'transparent'],
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