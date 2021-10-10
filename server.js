// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');

// Start up an instance of app
var app = express();
/* Dependencies */
const bodyParser = require('body-parser');


/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
const port = 3000;

// TODO-Spin up the server
const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};



    // GET route
app.get('/all', getData);
app.post('/Weatherdata', Weatherdata);

function getData (req, res) {
  res.send(projectData);
  console.log(projectData)

};
// TODO-ROUTES!

function Weatherdata(req,res){

    newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content,
        feeling: req.body.feeling
    }
  
    projectData.push(newEntry)
    res.send(projectData)
    console.log(projectData)
  }