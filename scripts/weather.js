const weather_api = "https://goweather.xyz/weather/";
const weatherQuery = document.getElementById("weatherQuery");
const weatherButton = document.getElementById("weatherButton");
const weatherBody = document.getElementById("weatherBody");

const getWeather = async () => {
  console.log("Getting weather data...");
  const query = weatherQuery.value.trim();

  console.log(`Querying weather for: ${query}`);

  if (!query) {
    weatherBody.innerHTML =
      "<p class='text-danger'>Please enter a city name.</p>";
    return;
  }

  weatherBody.innerHTML = "<p>Fetching weather data...</p>";

  const url = `${weather_api}${query}`;
  console.log(`Fetching data from: ${url}`);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("API response:", data);

    const { temperature, wind, description } = data;
    if (!temperature || !wind || !description) {
      weatherBody.innerHTML = `<p class="text-danger">Error: Invalid response from API.</p>`;
      return;
    }
    // Displaying the result
    weatherBody.innerHTML = `

    <div class="text-center">
      <h3 class = "text-success text-capitalize mb-2">Weather in ${query}</h3>
      <p>Temperature: ${temperature}</p>
      <p>Wind: ${wind}</p>
      <p>Description: ${description}</p>
    </div>
    `;
  } catch (err) {
    console.log("Error fetching data: ", err);
    weatherBody.innerHTML = `<p class="text-danger">Error: ${err.message}</p>`;
    return;
  }
};

weatherButton.addEventListener("click", () => {
  getWeather();
});
