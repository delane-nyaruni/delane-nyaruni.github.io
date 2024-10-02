const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Query student information
connection.query('SELECT * FROM students', (err, results) => {
  if (err) {
    console.error('Error executing MySQL query:', err);
    return;
  }

  // Process the results
  console.log('Student Information:');
  for (const student of results) {
    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Address: ${student.address}`);
    console.log(`Surname: ${student.surname}`);
    console.log(`Grade: ${student.grade}`);
    console.log('-------------------');
  }
});

// Close the MySQL connection
connection.end();