document.getElementById("getWeatherBtn").addEventListener("click", getdata);
async function getdata() {
    const cityName = document.getElementById("cityInput").value;
    if (cityName === "") {
        document.getElementById("errorMessage").innerText = "Please enter a city name!";
        return;
    }
    try {
        const apiURL = `https://api.weatherapi.com/v1/current.json?key=0c76541809c3492f813150347251204&q=${cityName}`;
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        document.getElementById("errorMessage").innerText = "";
        document.getElementById("weatherInfo").innerHTML = `
            <div class="weather-card">
                <h2>${data.location.name}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} km/h</p>
            </div>
        `;
    } catch (error) {
        document.getElementById("errorMessage").innerText = error.message;
    }
}