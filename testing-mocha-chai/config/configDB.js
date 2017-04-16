const monggo = require('mongoose');

module.exports = {
  mongoURL: {
    development:'mongodb://localhost/users',
    test:'mongodb://localhost/users-test'
  }
};