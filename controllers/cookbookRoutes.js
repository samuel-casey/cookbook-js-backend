const express = require('express');
const router = express.Router();
const mongoose = require('../db/connection');
// Require the Cookbook MODEL
const Cookbook = require('../models/Cookbook');

// Route to list all cookbooks
router.get('/', async (req, res) => {
	const cookbooks = await Cookbook.find({});
	res.json({ status: 200, data: cookbooks });
});
// Route to get cookbook by title
router.get('/title/:title', async (req, res) => {
	const cookbook = await Cookbook.find({ title: req.params.title });
	res.json({ status: 200, data: cookbook });
});
// Route to get cookbook by year published
router.get('/year/:year', async (req, res) => {
	const cookbook = await Cookbook.find({ yearPublished: req.params.year });
	res.json({ status: 200, data: cookbook });
});
// Route to create a cookbook
router.post('/', async (req, res) => {
	const cookbook = await Cookbook.create(req.body);
	res.json({ status: 200, data: cookbook });
});
// Route to update a cookbook
router.put('/:id', async (req, res) => {
	const cookbook = await Cookbook.findByIdAndUpdate(
		req.params.id,
		{ title: req.body.title, yearPublished: req.body.yearPublished },
		{ new: true }
	);
	res.json({ status: 200, message: 'updated item', data: cookbook });
});
// Route to delete the cookbook by _id
router.delete('/:id', async (req, res) => {
	const cookbook = await Cookbook.findOneAndDelete({ _id: req.params.id });
	res.json({ status: 200, msg: `${cookbook} deleted` });
});
module.exports = router;
