const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');
const auth = require('../jwt');

router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripId', ctrlTrips.tripsFindById);

router.post('/trips', auth, ctrlTrips.tripsAddTrip);
router.put('/trips/:tripId', auth, ctrlTrips.tripsUpdateTrip);
router.delete('/trips/:tripId', auth, ctrlTrips.tripsDeleteTrip);

module.exports = router;