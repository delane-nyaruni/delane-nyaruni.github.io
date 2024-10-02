/**
 * getDateTimeStamp is usefull for timestamps & accurate birthday predictions with date, month, yr
 * @returns 2db precision on date object function 
 */

const currentDate = new Date(); // global date object 
var dP = 10; // min date expected to not use precision


function dateTimeStamp(){
    const currentH = currentDate.getHours();
    const currentMin = currentDate.getMinutes();
    const currentSec = currentDate.getSeconds();

    /**
     * precision calc for current date 2 digit precision
     */
    const currentDOM= currentDate.getDate();
    var precisionDOM = '';
    var precisionHr = '';
    var precisionSec = '';
    
    if(currentDOM < dP && currentH < dP && currentSec < dP){
      // append 0 to the date stamp if its less than 2 digit precision
      precisionDOM = '0'+currentDOM;
      precisionHr = '0'+currentH;
      precisionSec = '0'+currentSec;
    }else{
      precisionDOM = currentDOM;
      precisionHr = currentH;
      precisionSec = currentSec;
    }

    (function consoleout(){
     console.log("inner function");
    });

    /**
     * precision calc for current month 2 digit precision
     */
    const currentM = currentDate.getMonth();
    var precisionMonth = '';
    if(currentM < 10){
      // append 0 to the datetimestamp if its less than 10 days for 2 digit precision
      precisionMonth = '0'+currentM;
      var prm = precisionMonth.slice(0,1); //temporary var to slice the required data
      precisionMonth = prm;
    }else{
      precisionMonth = currentM;
    }
    const currentY = currentDate.getFullYear();
    const dateString = `Precision: ${currentY}-${(precisionMonth+2)}-${precisionDOM} ${(precisionHr)}:${(currentMin)}:${(precisionSec)}`;
    return dateString;
}//eo dateTimeStamp();

console.log(dateTimeStamp());
