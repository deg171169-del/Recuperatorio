import { Router } from 'express';
import { readCards, writeCards } from '../storage/jsonStorage';
const router = Router();

router.post('/', async (req, res) => {
  try {
    const cards = await readCards();
    const { cardNumber, cardHolder, expirationDate, cvv, email } = req.body;

    if (cards.some(card => card.cardNumber === cardNumber)) {
      return res.status(400).send('Card number already exists');
    }

    const newCard = { cardNumber, cardHolder, expirationDate, cvv, email };
    cards.push(newCard);
    await writeCards(cards);

    res.status(201).send(newCard);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.get('/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const cards = await readCards();

    const userCards = cards.filter(card => card.email === email);
    res.status(200).send(userCards);
  } catch (error) {
    res.status(500).send('Server error');
  }
});



router.delete('/:cardNumber', async (req, res) => {
  try {
    const { cardNumber } = req.params;
    const cards = await readCards();

    const newCards = cards.filter(card => card.cardNumber !== cardNumber);
    if (cards.length === newCards.length) {
      return res.status(404).send('cardNumber not found');
    }

    await writeCards(newCards);
    res.status(200).send(`Tarjeta ${cardNumber} delete`);
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
});


module.exports = router;