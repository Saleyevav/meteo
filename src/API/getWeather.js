import axios from "axios";

export async function getWeather(city) {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");

  url.searchParams.append("q", city);
  url.searchParams.append("APPID", "e3fca08d4fee2e6246570679b947f2d8");
  url.searchParams.append("units", "metric");
  url.searchParams.append("lang", "ru");

  try {
    const res = await axios.get(url.href);
    const weatherData = {
      status: 200,
      id: res.data.id,
      country: res.data.sys.country,
      description: res.data.weather[0]["description"],
      icon: `https://openweathermap.org/img/wn/${res.data.weather[0]["icon"]}@4x.png`,
      temp:
        Math.round(res.data.main.temp) > 0
          ? `+${Math.round(res.data.main.temp)}`
          : `${Math.round(res.data.main.temp)}`,
      feels_like:
        Math.round(res.data.main.feels_like) > 0
          ? `+${Math.round(res.data.main.feels_like)}`
          : `${Math.round(res.data.main.feels_like)}`,
      wind: res.data.wind.speed,
      humidity: res.data.main.humidity,
    };

    return weatherData;
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      return {
        status: err.response.status,
        statusText: err.response.statusText,
      };
    } else if (err.request) {
      console.log("client never received a response, or request never left");
    } else {
      console.log("anything else error");
    }
  } finally {
  }
}
