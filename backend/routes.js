const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello World');
});

router.get('/test', (req, res) => {
	res.send('this is a test');
});

module.exports = router;
