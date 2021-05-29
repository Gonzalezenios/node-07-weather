const WeatherRepository = require('../repositories/weatherRepository');
const weatherRepository = new WeatherRepository();
const logger = require('../loaders/logger');

const weatherByCoordinates = async(lon, lat) => {

    const weather = await repository.weatherByCoordinates(lon, lat);

    logger.silly(JSON.stringify(weather));

    return {
        description: weather.weather[0].description,
        temperature: weather.main.temp,
        temperatureMin: weather.main.temp_min,
        temperatureMax: weather.main.temp_max
    };
}

module.exports = {
    weatherByCoordinates
}