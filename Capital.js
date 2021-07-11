const {City} = require('./City')

class Capital extends City{
    constructor(name) {
        super(name)
        this.airportLocation = ''
    }

    setAirport(location){
        this.airportLocation = location
    }
}

module.exports = {Capital}