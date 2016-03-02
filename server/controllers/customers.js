var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function() {
	return {
		show: function(req, res) {
			Customer.find({}, function(err, result) {
				if(err) {
					console.log('error in customers controller');
				} else{
					res.json(result);
				}
			})
		},
		add: function(req, res) {
			var new_customer = new Customer({name: req.body.name, date: new Date});
			new_customer.save(function(err, result) {
				if(err) {
					console.log('error adding customer in customer controller');
				} else {
					res.json(result);
				}
			})
		},
		del: function(req, res) {
			console.log(req.body.id, 'this is the IDDDDDDD');
			Customer.remove({_id: req.body.id}, function(err) {
				if(err) {
					console.log('cannot remove customer in controller');
				} else{
					res.end();
				}
			})
		},
	}
})();