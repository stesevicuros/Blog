require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		cookie: { maxAge: 10000 * 60 * 30 },
		saveUninitialized: false,
		resave: false
	})
);
app.use(
	cors({
		origin: 'http://localhost:3000'
	})
);

app.use(express.json());

const AuthRoute = require('./routes/auth');

const uri = process.env.MONGOOSE_CONNECTION;
mongoose.connect(uri);
mongoose.connection.once('open', () =>
	console.log('Connected to MongoDB')
);
mongoose.connection.on('error', () =>
	console.log('Could not connect to database')
);

app.use('/api', AuthRoute);

app.listen(3001, () => {
	console.log('Server is running on port 3001 :)');
});
