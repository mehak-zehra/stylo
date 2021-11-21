const mongoose = require('mongoose');

const User = mongoose.model('User', {name: String});

module.exports = User;