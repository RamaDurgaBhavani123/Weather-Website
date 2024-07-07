const apiKey = '52eb3e7b899cbc89cd84dbb35924defa';  // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
}
