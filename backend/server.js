require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

const AuthRoute = require('./routes/auth');
const routes = require('./routes.js');

mongoose.connect(process.env.MONGOOSE_CONNECTION);
mongoose.connection.once('open', () =>
	console.log('Connected to MongoDB')
);
mongoose.connection.on('error', () =>
	console.log('Could not connect to database')
);

app.use(
	cors({
		origin: 'http://localhost:3000'
	})
);
app.use('/api', AuthRoute);

app.listen(3001, () => {
	console.log('Server is running on port 3001 :)');
});
