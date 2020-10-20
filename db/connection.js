require('dotenv').config();
const { MONGODBURI } = process.env;
const mongoose = require('mongoose');
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const DB = mongoose.connection;
mongoose.connect(MONGODBURI, config);
mongoose.Promise = Promise;

DB.on('open', () => console.log('Connected to Mongo'))
	.on('close', () => console.log('Disconnected from Mongo'))
	.on('error', (err) => console.log(err));

module.exports = mongoose;
