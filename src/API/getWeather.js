import axios from "axios";

export async function getWeather(city) {
  const url = new URL(
    "https://v1.nocodeapi.com/saleyevav/ow/OZhjtJlHCGWpWfqZ/byCityName",
  );
  url.searchParams.append("q", city);
  url.searchParams.append("units", "metric");
  url.searchParams.append("lang", "ru");

  try {
    const res = await axios.get(url.href);
    console.log(res);
    const weatherData = {
      id: res.data.id,
      description: res.data.weather[0]["description"],
      icon: `https://openweathermap.org/img/wn/${res.data.weather[0]["icon"]}@4x.png`,
      temp: Math.round(res.data.main.temp - 272.15),
      feels_like: Math.round(res.data.main.feels_like - 272.15),
      wind: res.data.wind.speed,
      humidity: res.data.main.humidity,
    };

    return weatherData;
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      console.log(err.response);
    } else if (err.request) {
      console.log("client never received a response, or request never left");
    } else {
      console.log("anything else error");
    }
  } finally {
  }
}
