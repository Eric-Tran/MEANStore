var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function(){
	return {
		show: function(req, res) {
			Product.find({}, function(err, result){
				if(err) {
					console.log("error showing products in controller");
				} else {
					res.json(result);
				}
			})
		},
		add: function(req, res) {
			var new_product = new Product({name: req.body.name, url: req.body.url, description: req.body.description, quantity: req.body.quantity});
			new_product.save(function(err, result) {
				if(err) {
					console.log('error in product controller server');
				} else {
					res.json(result);
				}
			})
		},
		update: function(req, res) {
			console.log('HERE IS THE DATA IN CONTROLLER UPDATE', req.body)
			Product.findOne({name: req.body.name}, function(err, updated_product) {
				if(err) {
					console.log('cannot find in update');
				} else {
					console.log(req.body,"heres the amount to be updated");
					var new_qty = updated_product.quantity - req.body.quantity;
					Product.update({name: req.body.name}, {quantity: new_qty}, function(err) {
						if(err) {
					console.log('update product error in controller');
						} else {
					res.send('product updated!')
					}
					})
				}
			})
			
		},
	}
})();