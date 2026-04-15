const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('users');

const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  try {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    await user.save();

    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        name: user.name
      },
      'MY_SECRET',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || !user.validPassword(req.body.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        name: user.name
      },
      'MY_SECRET',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  register,
  login
};