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
var arrayMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function monthlyPaymentMode(usd,swipe,rtgs,month) {
  this.usd = usd;
  this.swipe = swipe;
  this.rtgs = rtgs;
  this.month = month;//timestamp
}

//  data sync
var monthlyPaymentMethod = {
  "Jan":{usd:20005,rtgs:1500,swipe:3000},
  "Feb":{usd:1090,rtgs:25000,swipe:3000},
  "Mar":{usd:2005,rtgs:2500,swipe:3000},
  "Apr":{usd:200,rtgs:9000,swipe:3000},
  "May":{usd:20900,rtgs:2500,swipe:3000},
  "Jun":{usd:2005,rtgs:1000,swipe:3000},
  "Jul":{usd:25,rtgs:2500,swipe:3000},
  "Aug":{usd:20005,rtgs:250,swipe:3000}, 
  "Sep":{usd:2005,rtgs:2500,swipe:3000}, 
  "Oct":{usd:205,rtgs:2500,swipe:3000}, 
  "Nov":{usd:25,rtgs:2500,swipe:3000},
  "Dec":{usd:20005,rtgs:2500,swipe:3000},
};

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "USD",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "green",
        pointRadius: 3,
        pointBackgroundColor: "lime",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "lime",
        pointHitRadius: 10,
        pointBorderWidth: 1,
        data: [
                monthlyPaymentMethod.Jan.usd, 
                monthlyPaymentMethod.Feb.usd, 
                monthlyPaymentMethod.Mar.usd, 
                monthlyPaymentMethod.Apr.usd, 
                monthlyPaymentMethod.May.usd, 
                monthlyPaymentMethod.Jun.usd, 
                monthlyPaymentMethod.Jul.usd, 
                monthlyPaymentMethod.Aug.usd, 
                monthlyPaymentMethod.Sep.usd, 
                monthlyPaymentMethod.Oct.usd, 
                monthlyPaymentMethod.Nov.usd, 
                monthlyPaymentMethod.Dec.usd],
      },
      {
        label: "RTGS",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "brown",
        pointRadius: 3,
        pointBackgroundColor: "brown",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [
          monthlyPaymentMethod.Jan.rtgs, 
          monthlyPaymentMethod.Feb.rtgs, 
          monthlyPaymentMethod.Mar.rtgs, 
          monthlyPaymentMethod.Apr.rtgs, 
          monthlyPaymentMethod.Jun.rtgs, 
          monthlyPaymentMethod.Jul.rtgs, 
          monthlyPaymentMethod.Aug.rtgs, 
          monthlyPaymentMethod.Sep.rtgs, 
          monthlyPaymentMethod.Oct.rtgs, 
          monthlyPaymentMethod.Nov.rtgs, 
          monthlyPaymentMethod.Dec.rtgs],
      },
      {
        label: "SWIPE",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "blue",
        pointRadius: 3,
        pointBackgroundColor: "blue",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [
          monthlyPaymentMethod.Jan.swipe, 
          monthlyPaymentMethod.Feb.swipe, 
          monthlyPaymentMethod.Mar.swipe, 
          monthlyPaymentMethod.Apr.swipe, 
          monthlyPaymentMethod.May.swipe, 
          monthlyPaymentMethod.Jun.swipe, 
          monthlyPaymentMethod.Jul.swipe, 
          monthlyPaymentMethod.Aug.swipe, 
          monthlyPaymentMethod.Sep.swipe, 
          monthlyPaymentMethod.Oct.swipe, 
          monthlyPaymentMethod.Nov.swipe, 
          monthlyPaymentMethod.Dec.swipe],
      }
    ],
  },
  options: {
    maintainAspectRatio: false,
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
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '$' + number_format(value);
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
      display: true
    },
    tooltips: {
      backgroundColor: "rgba(65, 225, 65, 0.308)",
      color: 'black',
      bodyFontColor: "black",
      titleMarginBottom: 10,
      titleFontColor: 'black',
      titleFontSize: 14,
      borderColor: 'silver',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: true,
      intersect: true,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ' : $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});


// TOTAL USD PAYMENT
var USD = 
monthlyPaymentMethod.Jan.usd +
monthlyPaymentMethod.Feb.usd +
monthlyPaymentMethod.Mar.usd +
monthlyPaymentMethod.Apr.usd +
monthlyPaymentMethod.May.usd +
monthlyPaymentMethod.Jun.usd +
monthlyPaymentMethod.Jul.usd +
monthlyPaymentMethod.Aug.usd +
monthlyPaymentMethod.Sep.usd +
monthlyPaymentMethod.Oct.usd + 
monthlyPaymentMethod.Nov.usd + 
monthlyPaymentMethod.Dec.usd;

// TOTAL RTGS PAYMENT
var RTGS = 
monthlyPaymentMethod.Jan.rtgs +
monthlyPaymentMethod.Feb.rtgs +
monthlyPaymentMethod.Mar.rtgs +
monthlyPaymentMethod.Apr.rtgs +
monthlyPaymentMethod.May.rtgs +
monthlyPaymentMethod.Jun.rtgs +
monthlyPaymentMethod.Jul.rtgs +
monthlyPaymentMethod.Aug.rtgs +
monthlyPaymentMethod.Sep.rtgs +
monthlyPaymentMethod.Oct.rtgs + 
monthlyPaymentMethod.Nov.rtgs + 
monthlyPaymentMethod.Dec.rtgs;

// TOTAL SWIPE PAYMENT
var SWIPE = 
monthlyPaymentMethod.Jan.swipe +
monthlyPaymentMethod.Feb.swipe +
monthlyPaymentMethod.Mar.swipe +
monthlyPaymentMethod.Apr.swipe +
monthlyPaymentMethod.May.swipe +
monthlyPaymentMethod.Jun.swipe +
monthlyPaymentMethod.Jul.swipe +
monthlyPaymentMethod.Aug.swipe +
monthlyPaymentMethod.Sep.swipe +
monthlyPaymentMethod.Oct.swipe + 
monthlyPaymentMethod.Nov.swipe + 
monthlyPaymentMethod.Dec.swipe;

// Pie Chart Example
var ctx = document.getElementById("majorPaymentMethodPyChart");
var majorPaymentMethodPyChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["USD", "RTGS", "SWIPE"],
        datasets: [{
            data: [USD, RTGS, SWIPE], //change data sync with database
            borderColor: ['transparent','transparent','transparent'],
            backgroundColor: ['green','blue','brown'],
            hoverBackgroundColor: ['green', 'blue', 'brown'],
            hoverBorderColor: ['green', 'blue', 'brown'],
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