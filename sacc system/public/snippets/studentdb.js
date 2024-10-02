// Import the necessary libraries
//const MongoClient = require('mongodb').MongoClient;
import { MongoClient } from 'mongodb';

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'your_database_name';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) {
    console.error('Failed to connect to the database:', err);
    return;
  }

  console.log('Connected successfully to the database');

  const db = client.db(dbName);

  // Create a collection for student classes
  const studentClassesCollection = db.collection('studentClasses');

  // Insert the student class data
  studentClassesCollection.insertOne({
    form: 'Form 1',
    boys: 125,
    girls: 130
  });
  
  // Repeat the above step to insert data for other student classes

  // Create a collection for student overview
  const studentOverviewCollection = db.collection('studentOverview');

  // Insert the student overview data
  studentOverviewCollection.insertOne({
    allBoysTotal: 500,
    allGirlsTotal: 600,
    allEnrolledTotal: 1100,
    paid: 500
  });

  // Create a collection for the bar chart data
  const barChartDataCollection = db.collection('barChartData');

  // Insert the bar chart data
  barChartDataCollection.insertOne({
    labels: ["Form 1", "Form 1", "Form 2", "Form 2", "Form 3", "Form 3", "Form 4", "Form 4", "Form 5", "Form 5", "Form 6", "Form 6"],
    datasets: [{
      label: "Total: ",
      backgroundColor: ["blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)"],
      hoverBackgroundColor: ["rgb(57, 57, 230)", "pink", "rgb(57, 57, 230)", "pink", "rgb(57, 57, 230)", "pink", "rgb(57, 57, 230)", "pink", "rgb(57, 57, 230)", "pink", "rgb(57, 57, 230)", "pink"],
      borderColor: "#4e73df",
      data: [125, 130, 124, 129, 128, 123, 127, 122, 120, 129, 118, 128],
      paid: [212, 213, 202, 222, 211, 212, 211, 200, 110, 111, 112, 103],
      backgroundColorPaid: ["red", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)", "blue", "rgb(248, 151, 167)"]
    }]
  });

  // Create a collection for the pie chart data
  const pieChartDataCollection = db.collection('pieChartData');

  // Insert the pie chart data
  pieChartDataCollection.insertOne({
    labels: ["Boys", "Girls"],
    datasets: [{
      data: [500, 600],
      borderColor: ['transparent', 'transparent'],
      backgroundColor: ['blue', 'rgb(248, 151, 167)'],
      hoverBackgroundColor: ['blue', 'rgb(248, 151, 167)'],
      hoverBorderColor: ['blue', 'rgb(248, 151, 167)']
    }]
  });

  // Close the MongoDB connection
  client.close();
});