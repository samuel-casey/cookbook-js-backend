require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const { PORT } = process.env;
app.use(logger('dev'));
const cors = require('cors');

// Add the middleware code needed to accept incoming data and add it to req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json({ data: 'Hello World, welcome to my cookbooks database!' });
});

const cookbookRouter = require('./controllers/cookbookRoutes');
app.use('/api/cookbooks/', cookbookRouter);

const authorRouter = require('./controllers/authorRoutes');
app.use('/api/authors/', authorRouter);

app.listen(PORT, () => console.log('Server running on port', PORT));
