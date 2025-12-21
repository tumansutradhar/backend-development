const API_KEY = "ab3d66f8d17532338cdd376a13cf1d1a";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value.trim();

    if (city === "") {
        showError("Please enter a city name!");

        return;
    }

    showLoading();

    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found! Please check spelling.");
            } else if (response.status === 401) {
                throw new Error("Invalid API key! Please check your API key.");
            } else {
                throw new Error("Failed to fetch weather data.");
            }
        }

        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        showError(error.message);

        console.error("Error:", error);
    } finally {
        hideLoading();
    }
}

function displayWeather(data) {
    document.getElementById("initialState").style.display = "none";
    document.getElementById("errorMsg").style.display = "none";

    const weatherInfo = document.getElementById("weatherInfo");

    weatherInfo.style.display = "block";

    document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;

    const iconCode = data.weather[0].main.toLowerCase();

    document.getElementById("weatherIcon").textContent = getWeatherEmoji(iconCode);
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("feelsLike").textContent = `${Math.round(data.main.feels_like)}°C`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("windSpeed").textContent = `${data.wind.speed} m/s`;
    document.getElementById("pressure").textContent = `${data.main.pressure} hPa`;
    document.getElementById("visibility").textContent = `${(data.visibility / 1000).toFixed(1)} km`;
    document.getElementById("clouds").textContent = `${data.clouds.all}%`;
}

function getWeatherEmoji(condition) {
    const weatherEmojis = {
        clear: "☀️",
        clouds: "☁️",
        rain: "🌧️",
        drizzle: "🌦️",
        thunderstorm: "⛈️",
        snow: "❄️",
        mist: "🌫️",
        fog: "🌫️",
        haze: "🌫️",
        smoke: "🌫️",
    };

    return weatherEmojis[condition] || "🌤️";
}

function showLoading() {
    document.getElementById("loading").style.display = "block";
    document.getElementById("initialState").style.display = "none";
    document.getElementById("weatherInfo").style.display = "none";
    document.getElementById("errorMsg").style.display = "none";
}

function hideLoading() {
    document.getElementById("loading").style.display = "none";
}

function showError(message) {
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = message;
    errorMsg.style.display = "block";

    document.getElementById("initialState").style.display = "none";
    document.getElementById("weatherInfo").style.display = "none";

    setTimeout(() => {
        errorMsg.style.display = "none";

        document.getElementById("initialState").style.display = "block";
    }, 5000);
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        getWeather();
    }
}
