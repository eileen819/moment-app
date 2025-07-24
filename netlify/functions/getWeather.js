require("dotenv").config();

exports.handler = async function (event, context) {
  const { lat, lon } = event.queryStringParameters;
  const API_KEY = process.env.API_KEY;

  if (!lat || !lon) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing coordinates" }),
    };
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        weather: data.weather[0].main,
        temp: Math.floor(data.main.temp),
        location: data.name,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch weather data" }),
    };
  }
};
