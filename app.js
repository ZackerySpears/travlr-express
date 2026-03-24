const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('./app_server/models/db');

const app = express();

// Set view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Register partials
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_server/routes/api');

app.use('/', indexRouter);
app.use('/api', apiRouter);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
