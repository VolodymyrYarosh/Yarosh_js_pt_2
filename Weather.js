const axios = require('axios')

const weatherUrl = 'https://goweather.herokuapp.com/weather/'

class Weather {

    constructor(){
        this.temperature = ''
        this.wind = ''
        this.date = Date.now()
        this.forecast = '' //Додати до класу погоди атрибут forecast
    }
    async setWeather(cityName){
        await axios.get(weatherUrl + cityName).then((response) => {
            this.temperature = response.data.temperature
            this.wind = response.data.wind
            this.forecast = response.data.forecast[0] // додав, щоб хоч якісь дані записувалися в атрибут)
            }).catch((error) => {return error.message})
    }
            // Додати до класу погоди метод setForecast

   /* async setForecast(cityName){
        await axios.get(weatherUrl + cityName).then((response) => {
            this.forecast = response.data.forecast
            }).catch((error) => {return error.message})
    }*/
}

module.exports = {Weather}