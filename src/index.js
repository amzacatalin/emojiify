const lodash = require('lodash');
const emoji = require('./emoji-data.json');

module.exports = {
  all: emoji,
  random: () => lodash.sample(emoji),
};