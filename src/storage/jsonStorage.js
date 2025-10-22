const fs = require('fs').promiseses;
const cardsFile = '.data/cards.json';

const readCards = async () => {
    const data = await fs.readfile(cardsFile, 'utf-8');
    return JSON.parse(data);

};

const writeCards = async (cards) => {
    await fs.writeFile(cardsFile, JSON.stringify(cards, null, 2));
};

module.exports = { readCards, writeCards };