const weatherEl = document.querySelector("#weather span:first-child");
const locationEl = document.querySelector("#weather span:last-child");

async function foundGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  try {
    const response = await fetch(`/api/getWeather?lat=${lat}&lon=${lon}`);
    const data = await response.json();
    weatherEl.innerText = `${data.weather} ${Math.floor(data.temp)}º, `;
    locationEl.innerText = data.location;
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
