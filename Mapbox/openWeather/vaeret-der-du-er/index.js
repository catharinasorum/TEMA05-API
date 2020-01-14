/*const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Oslo,no†&appid=f4b38696b19fb1462d4ed1cf3e4e2365";

// Været for Oslo i console loggen
const getWeather = async () => {
    const response = await fetch(api);
    const json = await response.json();

    console.log(json);
}

getWeather(); */

const txtSted = document.querySelector("#txtSted");
const ikon = document.querySelector("#ikon");

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=f4b38696b19fb1462d4ed1cf3e4e2365"

const getWeather = async (lat, long) => {

    const api = `${url}&lat=${lat}&lon=${long}`;

    const response = await fetch(api);
    const json = await response.json();

    // finner ut hvor jeg er
    const sted = json.name;
    txtSted.innerText = sted;

    // finner antall grader
    const grader = json.main.temp;
    const rundetOpp = Math.round(grader);
    txtGrader.innerText = `${rundetOpp} °C`;

    // finner ut hvilket ikon som passer været
    const bilde = json.weather[0].icon;
    const bildeURL = `http://openweathermap.org/img/wn/${bilde}@2x.png`;
    ikon.src = bildeURL;

    console.log(json);
};

const visPosisjon = (pos) => {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;

    getWeather(lat, long);
};

navigator.geolocation.getCurrentPosition(visPosisjon);