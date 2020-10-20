const express = require('express');
const router = express.Router();
const Author = require('../models/Author');
const Cookbook = require('../models/Cookbook');

// Route to list all authors
router.get('/', async (req, res) => {
	const authors = await Author.find({});
	res.json({ status: 200, data: authors });
});
// Route to get authors by firstname
router.get('/:firstName', async (req, res) => {
	const author = await Author.find({ firstName: req.params.firstName });
	res.json({ status: 200, data: author });
});

// Route to create an author:
router.post('/', async (req, res) => {
	const author = await Author.create(req.body);
	res.json({ status: 200, data: author });
});
// Route to update an author
router.put('/:firstName', async (req, res) => {
	const author = await Author.findOneAndUpdate(
		{ firstName: req.params.firstName },
		req.body,
		{
			new: true,
		}
	);
	res.json({ status: 200, msg: 'author updated', data: author });
});
// Update the cookbook using Postman.
router.put('/:authorId/updateBooks/:bookId', async (req, res) => {
	console.log('req.body', req.body);
	const cookbook = await Cookbook.findByIdAndUpdate(
		req.params.bookId,
		req.body,
		{ new: true }
	);
	console.log('Updated cookbook details: ', cookbook);
	const author = await Author.findByIdAndUpdate(req.params.authorId, {
		data: cookbook,
		new: true,
	});
	res.json({
		status: 200,
		msg: 'cookbook updated via author controller',
		data: author,
	});
});
// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)

module.exports = router;
