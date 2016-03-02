var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name: String,
	date: Date
})

mongoose.model('Customer', CustomerSchema);