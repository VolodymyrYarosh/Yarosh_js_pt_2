const {Weather} = require('./Weather')



class City {

    constructor(name){
        this.name = name
        this.weather = new Weather()
    }

    async setWeather() {
        await this.weather.setWeather(this.name)
    }
        // Додати метод setForecast до класу міста.

  /*  async setForecast() {
        await this.weather.setForecast(this.name)
    }*/
}

module.exports = {City}