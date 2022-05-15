const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user.model');

router.post('/register', (req, res) => {
	User.findOne({ username: req.body.username }).then(
		user => {
			if (user) {
				return res.status(400).json({
					username: 'Username already exists'
				});
			} else {
				const username = req.body.username;

				bcrypt.hash(
					req.body.password,
					10,
					(err, hash) => {
						const newUser = new User({
							username: username,
							password: hash
						});

						newUser
							.save()
							.then(() => {
								req.session.authenticated = true;
								req.session.userID =
									newUser._id;
								req.session.username =
									newUser.username;

								res.status(200).json(
									'Account created. You are now logged in!'
								);
							})
							.catch(err => res.send(err));
					}
				);
			}
		}
	);
});

router.post('/login', (req, res) => {
	User.findOne({ username: req.body.username }).then(
		user => {
			if (user) {
				bcrypt.compare(
					req.body.password,
					user.password,
					(err, result) => {
						if (result) {
							req.session.authenticated = true;
							req.session.userID = user._id;
							req.session.username =
								user.username;
							res.status(200).json(
								'You are now logged in!'
							);
						} else {
							res.status(401).json(
								'Incorrect password.'
							);
						}
					}
				);
			} else {
				res.status(404).json('Incorrect username.');
			}
		}
	);
});

router.post('/logout').post((req, res) => {
	req.session.authenticated = false;
	req.session.userID = undefined;
	req.session.username = undefined;
	res.send('Goodbye!');
});

module.exports = router;
