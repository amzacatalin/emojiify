const lodash = require('lodash');
const emoji = require('./emoji-data.json');

const getRandomItem = () => lodash.sample(emoji);

const random = (number) => {
  if (!number) {
    return getRandomItem();
  }
  const items = [];
  for (let i = 0; i < number; i++) {
    items.push(getRandomItem());
  }
  return items;
};

module.exports = {
  all: emoji,
  random,
};