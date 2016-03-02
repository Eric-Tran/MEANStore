var mongoose = require('mongoose');
var Order = mongoose.model('Order');
module.exports = (function() {
	return {
		show: function(req, res) {
			Order.find({}, function(err, result) {
				if(err) {
					console.log('Error in orders controller');
				} else {
					res.json(result);
				}
			})
		},
		add: function(req, res) {
			console.log(req.body);
			var new_order = new Order({customername: req.body.name, product: req.body.product, quantity: req.body.quantity, date: new Date})
			new_order.save(function(err, result) {
				if(err) {
					console.log('cannot add, error in order controller')
				} else {
					res.json(result);
				}
			})
		},

	}
})();
