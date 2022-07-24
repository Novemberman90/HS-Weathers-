let weather = { 
    paris: { 
      temp: 19.7,
      humidity: 80 
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
     'san francisco' : {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
   };
 

  
  
  // write your code here

 

//search system
function checkCity(event){
  event.preventDefault();
  let inputCity = document.querySelector("#search-city");
  let h2 = document.querySelector("#city");
  h2.innerHTML = (inputCity.value);

 // Weather API
             let unit = "metric";
             let apiKey = "c409940fd7208150de003ea7999c3e64";
             let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
             let city = document.querySelector("#search-city").value ;
             let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unit}`;
              axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

}

let searchCity = document.querySelector("#searc-form");
searchCity.addEventListener("submit", checkCity);

//function showTemperature(response) {

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp2 = document.querySelector(".temp2");
                        temp2.innerHTML = (temperature);
  console.log(temperature);

  let humidi = document.querySelector("#humidi");
              humidi.innerHTML = (response.data.main.humidity);
  let WindSpeed = document.querySelector("#WindSpeed");
              WindSpeed.innerHTML = (response.data.wind.speed);
  console.log(response.data);
 
    let description = document.querySelector("#description");
        description.innerHTML=(response.data.weather[0].main);
}





// Current location


// date



    function formatDate(now) {         
        let minute = now.getMinutes();
          if (minute < 10) {
          minute = `0${minute}`
        };
        
        let hour = now.getHours();
        if (hour < 10) {
          hour= `0${hour}`
        };
        let date = now.getDate();
        
        let days = ["Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thuresday" ,
                 "Friday", 
                  "Saturday" ];

        let day = days[now.getDay()];


         let monse = [" February",
          "January",
           "March",
            "April",
             "May",
              "June",
               "July",
                "August",
                 "September",
                  "October",
                   "November"
                   , "December"];
         let mons = monse[now.getMonth()];
         return `${day}, ${mons} ${date}, ${hour}:${minute}`;
         
        }

        let liDate = document.querySelector("li, #date");
        let now = new Date ();
        liDate.innerHTML = formatDate(now);


        // bonus 
        function convertToFahrenheit(event) {
          event.preventDefault();
          let temperatureElement = document.querySelector(".temp2");
          temperatureElement.innerHTML = 76,1;
        }
        
        function convertToCelsius(event) {
          event.preventDefault();
          let temperatureElement = document.querySelector(".temp2");
          temperatureElement.innerHTML = 22;
        }

        let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);