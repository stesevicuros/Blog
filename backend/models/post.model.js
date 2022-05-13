const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	author: String,
	comment: String,
	postedDate: Date
});

const postSchema = new Schema({
	title: String,
	author: String,
	content: String,
	postedDate: Date,
	comment: {
		type: [commentSchema],
		default: []
	}
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
