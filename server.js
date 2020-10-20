require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const { PORT } = process.env;
app.use(logger('dev'));

// Add the middleware code needed to accept incoming data and add it to req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ hello: 'Hello World, welcome to my landing page!' });
});

const cookbookRouter = require('./controllers/cookbookRoutes');
app.use('/api/cookbooks/', cookbookRouter);

const authorRouter = require('./controllers/authorRoutes');
app.use('/api/authors/', authorRouter);

app.listen(PORT, () => console.log('Server running on port', PORT));
