const {
    Router
} = require('express');
const {
    weatherByCityId,
    weatherByCoordinates
} = require('../controllers/weather');

const router = Router();

router.get('/', weatherByCoordinates);

router.get('/:city/:id', weatherByCityId);


module.exports = router;