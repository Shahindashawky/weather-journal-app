/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let feelings =  document.getElementById('feelings').value;
// Personal API Key for OpenWeatherMap API
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?'
let apiKey = '&appid=38944314f1a55293bf5e2a6324759cde';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);
/* Function called by event listener */
function performAction(e){
    let zip =  document.getElementById('zip').value;
    let zipcode =`zip=${zip}`

    getWeatherdata(baseURL,zipcode, apiKey)


    }
/* Function to GET Web API Data*/
const getWeatherdata = async (baseURL, Weatherdata, key)=>{
  let feelings =  document.getElementById('feelings').value;

    const res = await fetch(baseURL+Weatherdata+key)
      try {
        const newData = await res.json();       
        console.log(newData);
        document.getElementById('date').innerHTML = `date = ${newDate}`;
        document.getElementById('temp').innerHTML = `temp = ${newData.main.temp}`;
        document.getElementById('content').innerHTML = `weather = ${newData.weather[0].main} (${newData.weather[0].description})`;
        document.getElementById('feeling').innerHTML = `feeling = ${feelings}`;

        return newData;
      }catch(error) {
      console.log("error", error);
      }
  };
/* Function to POST data */



/* Function to GET Project Data */


