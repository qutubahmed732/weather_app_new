const input = document.querySelector("#search")
const btn = document.querySelector("#searchBtn")

const main_temp = document.querySelector(".main_temp");
const city = document.querySelector(".city")
const country = document.querySelector(".country")
const condition = document.querySelector(".condition")
const feels = document.querySelector(".feels")
const humidity = document.querySelector(".humidity")
const speed = document.querySelector(".speed")



let fetchedData = null;

function weatherFunc() {

    if (!input.value) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b48cd167f07b16bdb751bf1eaf89b818&units=metric`)
            .then(res => res.json())
            .then(data => {
                fetchedData = data;
                console.log(fetchedData)
                main_temp.innerText = Math.floor(fetchedData.main.temp);
                city.innerText = fetchedData.name;
                country.innerText = fetchedData.sys.country;
                condition.innerText = fetchedData.weather[0].description;
                feels.innerText = fetchedData.main.feels_like;
                humidity.innerText = fetchedData.main.humidity + "%";
                speed.innerText = fetchedData.wind.speed+" km/h";
            })
            .catch(err => console.log("Error:", err));
    } else {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=b48cd167f07b16bdb751bf1eaf89b818&units=metric`)
            .then(res => res.json())
            .then(data => {
                fetchedData = data;
                console.log(fetchedData)
                main_temp.innerText = Math.floor(fetchedData.main.temp);
                city.innerText = fetchedData.name;
                country.innerText = fetchedData.sys.country;
                condition.innerText = fetchedData.weather[0].description;
                feels.innerText = fetchedData.main.feels_like;
                humidity.innerText = fetchedData.main.humidity + "%";
                speed.innerText = fetchedData.wind.speed + " km/h";
                input.value = '';
                input.focus()
            })
            .catch(err => console.log("Error:", err));
    }

    removeEventListener("click", weatherFunc);
}

weatherFunc()

btn.addEventListener("click", weatherFunc)
