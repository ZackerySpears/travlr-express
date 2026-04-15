const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');
const auth = require('../jwt');

router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripId', ctrlTrips.tripsFindById);

router.post('/trips', ctrlTrips.tripsAddTrip);
router.put('/trips/:tripId', ctrlTrips.tripsUpdateTrip);
router.delete('/trips/:tripId', ctrlTrips.tripsDeleteTrip);

module.exports = router;