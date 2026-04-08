const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsDeleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.tripId);

    if (!trip) {
      return res.status(404).json({ message: 'trip not found' });
    }

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};