function currentDOY (){
    const currentDate = new Date();
    const currentDOM = currentDate.getDate();
    const currentMon = currentDate.getMonth();
    const currentYr = currentDate.getFullYear();
    const dateString = currentDOM+"-"+(currentMon+1)+"-"+currentYr;
    return dateString;
};

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
    if(currentDOM < dP && currentH < dP){
      // append 0 to the datetimestamp if its less than 2 digit precision
      precisionDOM = '0'+currentDOM;
      precisionHr = '0'+currentH;
    }else{
      precisionDOM = currentDOM;
      precisionHr = currentH;
    }

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
    const dateString = currentY +"-"+ (precisionMonth+1)+"-"+ precisionDOM + "  "+ (precisionHr)+":"+(currentMin)+":"+(currentSec);
    return dateString;
}//eo dateTimeStamp();


var currentDate = currentYr;
var currentDOY = currentDOY();
console.log(currentDate);
var studentIdShuffle = {
    //create student object
    Student:{
        studentName: 'delane',
        studentSurname: 'nyaruni',
        studentForm: 4,
        studentGender:['m'],
        studentNational_id: '632048251s49',
        StudentDOB: '1998',
       
        GetDateTimeStamp : currentDOY,
//get data & stringify to datestring

        studentAge(){
            return this.GetDateTimeStamp - this.StudentDOB;
        }
     /***
      *   student_Id: IdGeneratorEngine (studentName, studentSurname, studentForm, studentGender, studentNational_id, studentAge ) {
            studentName = this.studentName,
            studentSurname = this.studentSurname,
            studentForm = this.studentForm,
            studentGender = this.studentGender,
            studentNational_id = this.studentNational_id,
            studentAge = this.student,

        }
    */ 
    }    //wre we check the yr born & give age back to the client 
};

function IdGeneratorEngine (studentName, studentSurname, studentForm, studentGender, studentNational_id, studentAge ) {
    // take in an object data & serialize to string datatype with uppercase method 
    var studentName = String(studentIdShuffle.Student.studentName).toUpperCase().substring(0,1);
    var studentSurname = String(studentIdShuffle.Student.studentSurname).toUpperCase().substring(0,1);
    var studentForm = String(studentIdShuffle.Student.studentForm).toUpperCase().substring(0,1);
    var studentGender = String(studentIdShuffle.Student.studentGender).toUpperCase().substring(0,1);//create a selectGender method
    var studentNational_id = String(studentIdShuffle.Student.studentNational_id).toUpperCase().substring(9,10);
    var studentAge = //reverse the returned age to the IdGenerator after DOB
                    String(studentIdShuffle.Student.studentAge).charAt(1) + 
                    String(studentIdShuffle.Student.studentAge).charAt(0);

    // model & printout 
    var student_Id = `ID Num: ${studentName}${studentSurname}${studentForm}${studentGender}${studentNational_id}${studentAge}`;
    return student_Id;        

}// eo function IdGeneratorEngine (studentName, studentSurname, studentGender, studentNational_id, studentAge ) {

//return reordered data
var idNum = IdGeneratorEngine();
console.log('');
console.log(`\t ${idNum}`);
console.log('');
const printstudentAge = studentIdShuffle.Student.studentAge();
console.log(printstudentAge);
exports = IdGeneratorEngine;