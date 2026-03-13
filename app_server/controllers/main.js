const index = (req, res) => {
  res.render('index', { title: 'Travlr Getaways' });
};

const about = (req, res) => {
  res.render('about', { title: 'About Travlr Getaways' });
};

const contact = (req, res) => {
  res.render('contact', { title: 'Contact Us' });
};

const meals = (req, res) => {
  res.render('meals', { title: 'Meals' });
};

const news = (req, res) => {
  res.render('news', { title: 'Travel News' });
};

const rooms = (req, res) => {
  res.render('rooms', { title: 'Rooms' });
};

const travel = (req, res) => {
  res.render('travel', { title: 'Travel Packages' });
};

module.exports = {
  index,
  about,
  contact,
  meals,
  news,
  rooms,
  travel
};