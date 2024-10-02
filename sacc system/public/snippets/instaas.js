const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Create a new SQLite database and establish a connection
const db = new sqlite3.Database(':memory:');

// Create a students table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    address TEXT,
    surname TEXT,
    grade INTEGER
  )
`);

// Parse JSON request bodies
app.use(express.json());

// Define a route to add a new student
app.post('/students', (req, res) => {
  const { name, age, address, surname, grade } = req.body;

  // Insert the student details into the database
  db.run(
    'INSERT INTO students (name, age, address, surname, grade) VALUES (?, ?, ?, ?, ?)',
    [name, age, address, surname, grade],
    function (err) {
      if (err) {
        console.error('Error inserting student:', err);
        res.status(500).send('Error inserting student');
        return;
      }

      // Retrieve the inserted student's ID
      const studentId = this.lastID;

      res.status(201).json({ id: studentId, name, age, address, surname, grade });
    }
  );
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});