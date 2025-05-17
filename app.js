const apiKey = "5ff7cc03fa2c2c2ac831f6919fd5ecf3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".cityName").innerHTML = data.name;
  document.querySelector(".humidityDetails").innerHTML =
    data.main.humidity + " %";
  document.querySelector(".windDetails").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "assets/images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "assets/images/rain.png";
  } else if (data.weather[0].main == "mist") {
    weatherIcon.src = "assets/images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "assets/images/snow.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "assets/images/snow.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "assets/images/clear.png";
  } else if (data.weather[0].main == "Wind") {
    weatherIcon.src = "assets/images/wind.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
