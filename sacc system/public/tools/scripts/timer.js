/**
 * getDateTimeStamp is usfull for timestamps
 * 
 * @returns getters
 */
function getDateTimeStamp(){
    const currentDate = new Date();
    const currentHr = currentDate.getHours();
    const currentMin = currentDate.getMinutes();
    const currentSec = currentDate.getSeconds();
    const currentDOM = currentDate.getDate();

    /**
     * precision calc for current month 2 digit precision
     */
    const currentM = currentDate.getMonth();
    var precisionMonth = '';
    if(currentM < 10){
      // append 0 to the datetimestamp if its less than 10 days for 2 digit precision
      precisionMonth = '0'+currentM+1;
      var prm = precisionMonth.slice(0,1); //temporary var to slice the required data
      precisionMonth = prm;
    }else{
      precisionMonth = currentM+1;
    }
    const currentMon = currentDate.getMonth();
    const currentYr = currentDate.getFullYear();
    const dateString = (currentHr)+":"+(currentMin)+":"+(currentSec)+"  "+currentDOM+"-"+(precisionMonth+2)+"-"+currentYr;
    return dateString;
}//eo getDateTimeStamp()


/**
 * 
 * @returns setters
 */
function setDateTimeStamp(){
    const setDate = new Date();
    const setHr = setDate.setHours();
    const setMin = setDate.setMinutes();
    const setSec = setDate.setSeconds();
    const setDOM = setDate.setDate();
    const setMon = setDate.setMonth();
    const setYr = setDate.setFullYear();
    const setDateString = (setHr)+":"+(setMin)+":"+(setSec)+"  "+setDOM+"/"+(setMon+1)+"/"+setYr;
    return setDateString;
}//eo setDateTimeStamp()

const GetDateTimeStamp = getDateTimeStamp();
//var GDTS = GetDateTimeStamp.currentHr;
// var dateOut = JSON.stringify(GDTS);
console.log(`Date time: ${GetDateTimeStamp}`);
//get user input for the setter function from an object
//const SetDateTimeStamp = setDateTimeStamp();
//var inputDate = read(inputDate);
//console.log(inputDate);


/**
 * current time
 */

function dateTimeStamp(){
    const currentDate = new Date();
    const currentH= currentDate.getHours();
    const currentMin= currentDate.getMinutes();
    const currentSec= currentDate.getSeconds();

    /**
     * precision calc for current date 2 digit precision
     */
    const currentDOM= currentDate.getDate();
    var dP = 10;
    var precisionDOM = '';
    var precisionHr = '';
    var precisionSec = '';
    
    if(currentDOM < dP && currentH < dP){
      // append 0 to the datetimestamp if its less than 2 digit precision
      precisionDOM = '0'+currentDOM;
      precisionHr = '0'+currentH;
    }else{
      precisionDOM = currentDOM;
      precisionHr = currentH;
    }
    
    if(currentSec < dP){
        // append 0 to the datetimestamp if its less than 2 digit precision
        precisionSec = '0'+currentSec;
      }else{
        precisionSec = currentSec;
    }


    /**
     * precision calc for current month 2 digit precision
     */
    const currentM = currentDate.getMonth();
    var precisionMonth = '';
    if(currentM < 10){
      // append 0 to the datetimestamp if its less than 10 days for 2 digit precision
      precisionMonth = '0'+currentM+1;
      var prm = precisionMonth.slice(0,1); //temporary var to slice the required data
      precisionMonth = prm;
    }else{
      precisionMonth = currentM+1;
    }
    const currentY = currentDate.getFullYear();
    const dateString = `Precision: ${currentY}-${(precisionMonth+2)}-${precisionDOM} ${(precisionHr)}:${(currentMin)}:${(currentSec)}`;
    return dateString;
}//eo dateTimeStamp();


console.log(dateTimeStamp());