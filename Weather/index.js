const weatherForm = document.querySelector(".weather-form");
const cityInput = document.querySelector(".city-input");
const weatherDiv = document.querySelector(".weather");

const apiKey = "6e2a5bc08b1090ed7e2d51ee352d6303";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value.trim();

  if (!city) {
    weatherDiv.innerHTML = "<p>Please enter a city name</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
  } catch (error) {
    weatherDiv.innerHTML = "<p>Unable to fetch weather data</p>";
    console.log(error);
  }
});
