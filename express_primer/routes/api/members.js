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

	//res.json(members);
	res.redirect('/');

});

// Update member (Tip: Code duplicate of GET single member)
router.put('/:id', (req, res) => {
	const found = members.some(member => member.id === parseInt(req.params.id));

	if (found) {
		const updMember = req.body;
		members.forEach(member => {
			if (member.id === parseInt(req.params.id)) {
				member.name = updMember.name ? updMember.name : member.name;
				member.email = updMember.email ? updMember.email : member.email;

				res.json({ msg: 'Member updated', member });
			}
		});
	} else {
		res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
	}

});

// DELETE member (Tip: Code duplicate of GET single member)
router.delete('/:id', (req, res) => {
	const found = members.some(member => member.id === parseInt(req.params.id));

	if (found) {
		res.json({
			msg: 'Member deleted',
			members: members.filter(member => member.id !== parseInt(req.params.id))
		});
	} else {
		res.status(400).json({
			msg: `No member with the id of ${req.params.id}`
		})
	}

});

module.exports = router;