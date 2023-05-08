const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const inputBox = document.querySelector(".search-box input")
const weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
const error = document.querySelector(".not-found")
search.addEventListener("click", function(){
    main();
})

inputBox.addEventListener("keydown", function(){
    if(event.key === "Enter"){
        main();
        event.preventDefault()
    }
})
function main(){
    const APIKey = "b7da4b6caf028fccca0965c1d67a49d2";
    const city = document.querySelector(".search-box input").value;

    if(city === ""){
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`).then(response =>response.json()).then(
        json=>{
            if(json.cod === '404'){
                container.style.height = '400px'
                weatherBox.style.display = "none"
                error.style.display = "block";
                error.classList.add("fade-in");
                return;
            }
            error.style.display = 'none';
            error.classList.remove('fade-in')
            const image = document.querySelector('.weather-box img')
            const temperature = document.querySelector(".weather-box .temperature")
            const description = document.querySelector(".weather-box .description")
            const humidity = document.querySelector(".weather-details .humidity span")
            const wind = document.querySelector(".weather-details .wind span")
            console.log(json.weather[0].main)

            switch(json.weather[0].main){
                case "Clear":
                  image.src = '../images/clear.png';
                  break
                case "Rain":
                  image.src = '../images/rain.png';
                  break
                case "Snow":
                  image.src = '../images/snow.png';
                  break
                case "Clouds":
                  image.src = '../images/cloud.png';
                  break
                case "Haze":
                  image.src = '../images/haze.png';
                  break
                case "Thunderstorm":
                  image.src = '../images/thunderstorm.png';
                  break
                default:
                  image.src = '';
              }
              
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`

            weatherBox.style.display = ''
            weatherDetails.style.display = ''
            weatherBox.classList.add('fade-in')
            weatherDetails.classList.add('fade-in') 
            container.style.height = '590px'
        }
    )
}