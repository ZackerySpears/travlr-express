const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({
  secret: 'MY_SECRET',
  algorithms: ['HS256'],
  requestProperty: 'payload'
});

module.exports = auth;