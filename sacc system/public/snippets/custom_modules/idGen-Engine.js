var studentIdShuffle = {
    //create student object
    Student:{
        studentName: 'delane',
        studentSurname: 'nyaruni',
        studentForm: 4,
        studentGender:['m'],
        studentNational_id: '632048251s49',
        studentAge: 25 
    }    //wre we check the yr born & give age back to the client 
};

function IdGeneratorEngine (studentName, studentSurname, studentForm, studentGender, studentNational_id, studentAge ) {
    // take in an object data & serialize to string datatype with uppercase method 
    var studentName = String(studentIdShuffle.Student.studentName).toUpperCase().substring(0,1);
    var studentSurname = String(studentIdShuffle.Student.studentSurname).toUpperCase().substring(0,1);
    var studentForm = String(studentIdShuffle.Student.studentForm).toUpperCase().substring(0,1);
    var studentGender = String(studentIdShuffle.Student.studentGender).toUpperCase().substring(0,1);//create a selectGender method
    var studentNational_id = String(studentIdShuffle.Student.studentNational_id).toUpperCase().substring(9,10);
    var studentAge = //reverse the returned age to the IdGenerator 
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


