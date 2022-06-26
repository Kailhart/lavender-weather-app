let apiKey = "4004c8123fed687c059e5362ad5e8262";
let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function showTime() {
  let date = new Date();

  let hours = document.querySelector("#hours");
  hours.innerHTML = String(date.getHours()).padStart(2, "0");

  let minutes = document.querySelector("#minutes");
  minutes.innerHTML = String(date.getMinutes()).padStart(2, "0");

  let weekday = document.querySelector("#current-week-day");
  weekday.innerHTML = dayNames[date.getDay()];
}
showTime();

function displayCurrentWeather(response) {
  console.log(response.data);

  let city = document.querySelector("#city-name");
  city.innerHTML = response.data.name;

  let currentDegrees = document.querySelector("#current-degrees");
  currentDegrees.innerHTML = Math.round(response.data.main.temp);

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;

  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);

  let description = document.querySelector("#current-weather-description");
  description.innerHTML = response.data.weather[0].description;
}

let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;

axios.get(currentWeatherUrl).then(displayCurrentWeather);
