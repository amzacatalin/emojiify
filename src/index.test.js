const expect = require('chai').expect;
const emoji = require('./index');

describe('emojiify', () => {
  it('emoji.all array length', () => {
    expect(emoji.all).to.have.lengthOf(4);
  });

  it('should contain `smile` emoji', () => {
    expect(emoji.all.some(e => e.name === 'smile')).to.be.true;
  });

  it('should return a random item', () => {
    const item = emoji.random();
    expect(emoji.all).to.include(item);
  });

  it('should return multiple random items', () => {
    const itemsNr = 3;
    const items = emoji.random(itemsNr);
    items.forEach((item) => expect(emoji.all).to.include(item));
    expect(items).to.have.lengthOf(itemsNr); 
  });
});