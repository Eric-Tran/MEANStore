var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	customername: String,
	product: String,
	quantity: Number,
	date: Date
})

mongoose.model('Order', OrderSchema);