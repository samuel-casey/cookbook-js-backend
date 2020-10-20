//import connection
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const cookbookSchema = new Schema({
	title: String,
	yearPublished: Number,
});

const Cookbook = mongoose.model('cookbook', cookbookSchema);
module.exports = Cookbook;
