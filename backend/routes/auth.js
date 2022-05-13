const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user.model');

router.post('/register', (req, res) => {
	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			return res
				.status(400)
				.json({ email: 'Email already exists' });
		} else {
			let newUser = new User({
				email: req.body.email,
				password: req.body.password
			});
			bcrypt
				.hash(newUser.password, 10)
				.then((err, hash) => {
					if (err) {
						console.log(err);
					}
					newUser.password = hash;
					newUser
						.save()
						.then(user => res.json(user))
						.catch(err => console.log(err));
				});
		}
	});
});

router.post('/login', (req, res) => {
	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			bcrypt
				.compare(req.body.password, user.password)
				.then(isCorrectPassword => {
					if (isCorrectPassword) {
						res.json('Logged in');
					} else {
						res.status(403).json(
							'Wrong password'
						);
					}
				});
		} else {
			res.status(404).json({
				email: "Email doesn't exists"
			});
		}
	});
});

module.exports = router;
