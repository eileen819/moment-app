import { config } from "../api.js";

const weatherEl = document.querySelector("#weather span:first-child");
const locationEl = document.querySelector("#weather span:last-child");
const API_KEY = config.API_KEY;

async function foundGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    weatherEl.innerText = `${data.weather[0].main} ${Math.floor(
      data.main.temp
    )}º, `;
    locationEl.innerText = data.name;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("done!");
  }
}

function notFoundGeo() {
  alert("I can't find your location");
}

navigator.geolocation.getCurrentPosition(foundGeo, notFoundGeo);
