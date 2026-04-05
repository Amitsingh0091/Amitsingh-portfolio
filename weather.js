const apiKey = "1e245d0b12ec63c21d060693a118d44c";
const result = document.getElementById("result");

async function getWeather(){
  const city = document.getElementById("city").value.trim();
  if(!city) return;

  try{
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();

    if(data.cod !== 200){
      result.innerHTML = `<p class="error">City not found</p>`;
      return;
    }

    result.innerHTML = `
      <div class="temp">${Math.round(data.main.temp)}°C</div>
      <p>${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind: ${data.wind.speed} m/s</p>
    `;
  }catch(err){
    result.innerHTML = `<p class="error">Error fetching data</p>`;
  }
}