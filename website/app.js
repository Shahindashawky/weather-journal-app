/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
let feelings =  document.getElementById('feelings').value;
// Personal API Key for OpenWeatherMap API
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = '&appid=38944314f1a55293bf5e2a6324759cde&units=metric';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);
/* Function called by event listener */
function performAction(e){
    let zip =  document.getElementById('zip').value;
    let feelings =  document.getElementById('feelings').value;
    let zipcode =`zip=${zip}`

    getWeatherdata(baseURL,zipcode, apiKey)
    .then(function(data){
      // Add data
      console.log(data);
      postData('/Weatherdata', {date:newDate, temp:data.main.temp, content:data.weather[0].main, feeling: feelings} )

    })
    .then(()=>
    updateUI()
  );

    }
/* Function to GET Web API Data*/
const getWeatherdata = async (baseURL, Weatherdata, key)=>{

    const res = await fetch(baseURL+Weatherdata+key)
      try {
        const newData = await res.json();       
        console.log(newData);


        return newData;
      }catch(error) {
      console.log("error", error);
      }
  };
/* Function to POST data */

const postData = async ( url = '', data = {})=>{

  const response = await fetch(url, {
  method: 'POST', 
  credentials: 'same-origin', 
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header        
});

  try {
    const newData = await response.json();
    return newData
  }catch(error) {
  console.log("error", error);
  }
}

/* Function to GET Project Data */


const updateUI = async () => {
  const request = await fetch('/all');

  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = `date = ${allData.date}`;
    document.getElementById('temp').innerHTML = `temp = ${allData.temp}`;
    document.getElementById('content').innerHTML = `weather = ${allData.content}`;
    document.getElementById('feeling').innerHTML = `feeling = ${allData.feeling}`;

  }catch(error){
    console.log("error", error);
  }
}