const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Oslo,no†&appid=f4b38696b19fb1462d4ed1cf3e4e2365";

const getWeather = async () => {
    const response = await fetch(api);
    const json = await response.json();

    console.log(json);
}

getWeather();