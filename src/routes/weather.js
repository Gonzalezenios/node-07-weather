const {
    Router
} = require('express');
const {
    weatherByCoordinates
} = require('../controllers/weather');

const router = Router();

router.get('/', weatherByCoordinates)


module.exports = router;