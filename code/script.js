fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=5b2a749a3cbe3af55c1fca9a16b04d29").then((response) => {
return response.json()
}).then((json) => {
  showName(json)
  showTemp(json)
  showWeather(json)
  console.log(json.sys.sunrise)
})

const showName = (json) => {
  document.getElementById("city").innerHTML = json.name
}

const showTemp = (json) => {
  const temp = json.main.temp.toFixed(1)
  document.getElementById("temp").innerHTML = temp
  backgroundChange(temp)
}

const backgroundChange = (temp) => {
  const tempBackground = document.getElementById("container")
  if(temp > 20) {
    tempBackground.classList.toggle("warmstyle");
  } else {
    tempBackground.classList.toggle("coldstyle");
  }
}

const showWeather = (json) => {
  document.getElementById("weather").innerHTML = json.weather[0].description
}
