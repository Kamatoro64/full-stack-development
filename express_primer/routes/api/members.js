const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');



// GET all members
router.get('/', (req, res) => res.json(members));

// GET single member
router.get('/:id', (req, res) => {
	const found = members.some(member => member.id === parseInt(req.params.id));

	if (found) {
		res.json(members.filter(member => member.id === parseInt(req.params.id))); // req.params.id is a string! Needs to match type to use ===
	} else {
		res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
	}

});

// Create Member (same route but different method is OK)
router.post('/', (req, res) => {
	// res.send(req.body) // This does not work without a body parser

	// Initialise the body parser as middleware (express built in) in index.js
	// app.use(express.json());
	// app.use(express.urlencoded({ extended: false }));

	const newMember = {
		id: uuid.v4(),
		name: req.body.name,
		email: req.body.email,
		status: 'active'
	}

	if (!newMember.name || !newMember.email) {
		return res.status(400).json({ msg: 'Please include a name and email' }); // bad request
	}

	members.push(newMember);


	res.json(members);



});

module.exports = router;