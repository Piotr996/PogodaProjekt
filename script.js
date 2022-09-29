let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";

    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
    //MODYFIKACJA LINKU POD WYPROWADZENIE DANYCH Z API
    console.log(FULL_URL)

    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response) => {
        return response.json();
    })
}



searchCity = () => {
    const city = document.getElementById('city-input').value;

    getWeatherData(city)
        .then((response) => {
            console.log(response);
            showWeatherData(response);
        }).catch((error) => {
            console.log(error);
        })
}


showWeatherData = (weatherData) => {
    document.getElementById("city").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = Math.round((weatherData.main.temp - 32) * 5 / 9) + "°C"
    document.getElementById("cisnienie").innerText = "Cisnienie: " + weatherData.main.pressure + " hPa";
}