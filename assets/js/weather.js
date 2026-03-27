async function getWeather() {
  try {
    const locRes = await fetch("https://ipapi.co/json/");
    const locData = await locRes.json();

    const city = locData.city;
    document.querySelector(".city").innerText = city;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${CONFIG.API_KEY}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();

    document.querySelector(".temp").innerText =
      `${data.main.temp.toFixed(1)}°C`;

    document.querySelector(".desc").innerText =
      data.weather[0].description.toUpperCase();

    const icon = data.weather[0].icon;
    document.querySelector(".weather-icon").src =
      `https://openweathermap.org/img/wn/${icon}@2x.png`;

  } catch (error) {
    console.error("Error ambil cuaca:", error);
  }
}