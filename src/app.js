import express from 'express';
import auth from './middleware/auth';
import cardsController from './controllers/cards.controller';

const app = express();

app.use(express.jsaon());
app.use(auth);

app.use('/cards', cardsController);

module.exports = app;