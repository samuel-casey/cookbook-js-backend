const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
	firstName: String,
	lastName: String,
	cookbooks: [{ type: Schema.Types.ObjectId, ref: 'Cookbook' }],
});

const Author = mongoose.model('author', authorSchema);
module.exports = Author;
//export model named "Author"
