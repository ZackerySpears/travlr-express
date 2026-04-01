const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json(err);
  }
};

const tripsFindById = async (req, res) => {
  const tripId = req.params.tripId;

  if (!tripId) {
    return res.status(404).json({ message: 'No tripId in request' });
  }

  try {
    const trip = await Trip.findById(tripId);

    if (!trip) {
      return res.status(404).json({ message: 'tripId not found' });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindById
};