const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');
require('./app_server/models/db');

const app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');
const authRouter = require('./app_api/routes/auth');

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/api', authRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});