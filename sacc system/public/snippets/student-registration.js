class Student {
  constructor(student_id, name, surname, gender, national_id, phone_num, form, _class, address, email, subjects = [], tuitionFee = 0, levyFee = 0, medicalConditions = [], parent = {}) {
    this.student_id = student_id;
    this.name = name;
    this.middleName = null;
    this.surname = surname;
    this.gender = gender;
    this.national_id = national_id;
    this.phone_num = phone_num;
    this.form = form;
    this.class = _class;
    this.address = address;
    this.email = email;
    this.subjects = subjects;
    this.tuitionFee = tuitionFee;
    this.levyFee = levyFee;
    this.balance = tuitionFee + levyFee;
    this.medicalConditions = medicalConditions;
    this.parent = parent;
    this.timestamp = new Date();
  }

  registerSubject(subject) {
    this.subjects.push(subject);
  }

  unregisterSubject(subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  }

  //fees
    payTuitionFee(amount) {
      if (amount > 0) {
        this.tuitionFee += amount;
        this.balance -= amount;
      }
    }
  
    payLevyFee(amount) {
      if (amount > 0) {
        this.levyFee += amount;
        this.balance -= amount;
      }
    }
  //eo fees

  addMedicalCondition(condition) {
    this.medicalConditions.push(condition);
  }

  removeMedicalCondition(condition) {
    const index = this.medicalConditions.indexOf(condition);
    if (index !== -1) {
      this.medicalConditions.splice(index, 1);
    }
  }
}

// Example usage:
const student = new Student(
  123456789,
  'John',
  'Doe',
  'M',
  '1234567890',
  '1234567890',
  '10A',
  'Science',
  '123 Main Street',
  'john.doe@example.com',
  ['Maths', 'English'],
  1000, // Tuition fee
  500,  // Levy fee
  ['Asthma', 'Allergies'],
  {
    name: 'Jane',
    surname: 'Doe',
    national_id: '0987654321',
    phone_num: '0987654321',
    email: 'jane.doe@example.com',
    address: '456 Elm Street'
  }
);

// Register additional subject
student.registerSubject('Physics');

// Unregister a subject
student.unregisterSubject('English');

// Add a medical condition
student.addMedicalCondition('Diabetes');

// Remove a medical condition
student.removeMedicalCondition('Allergies');

console.log(student);
