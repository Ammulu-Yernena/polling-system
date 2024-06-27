const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/E-Voting-System');

module.exports.User = require('./user');
module.exports.Poll = require('./poll');