const {City} = require('./City')
const {Capital} = require('./Capital')


let city1 = new City('Lutsk')
let city2 = new City( 'Lviv')


city1.setWeather().then(() => {console.log(city1)}).catch((error) => {console.log(error)})
city2.setWeather().then(() => {console.log(city2)}).catch((error) => {console.log(error)})

let capital = new Capital('Kyiv')
capital.setAirport('Boryspil')
capital.setWeather().then(() => {console.log(capital)}).catch((error) => {console.log(error)})







