const APIKEY = "dfa000dc91e2642763a13d279f113165";

const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");

async function checkWeather(city) {

    if (!city) {
        city = "Baku";
    }

    try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${APIKEY}&units=metric`;

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        console.log(data);

        document.querySelector(".temp").textContent =
            Math.round(data.main.temp) + "°C";

        document.querySelector(".city").textContent =
            data.name;

        document.querySelector(".humidity").textContent =
            data.main.humidity + "%";

        document.querySelector(".wind").textContent =
            data.wind.speed + " km/h";

    } catch (error) {

        console.log(error);

        document.querySelector(".city").textContent =
            "City not found";

    }
}


searchBtn.addEventListener("click", () => {

    const city = searchBox.value.trim();

    if (city !== "") {
        checkWeather(city);
    }

});

searchBox.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        const city = searchBox.value.trim();

        if (city !== "") {
            checkWeather(city);
        }

    }

});


checkWeather("Baku");