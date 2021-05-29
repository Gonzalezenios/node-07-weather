const express = require('express');
const Success = require('../Handlers/successHandler');
const {
    weatherByCoordinates: weatherByCoordinatesServices
} = require('../services/weatherService');


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const weatherByCoordinates = async (req, res) => {
        const {
            lon,
            lat
        } = req.query;
        const weather = await weatherByCoordinatesServices(lon, lat)
        const success = new Success(weather);

        res.json(success);
    
};

module.exports = {
    weatherByCoordinates
}