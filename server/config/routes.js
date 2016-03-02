var orders = require('./../controllers/orders.js');
var customers = require('./../controllers/customers.js');
var products = require('./../controllers/products.js');
module.exports = function(app) {
	//////customer routes//////customer routes
	app.get('/customers', function(req, res) {
		customers.show(req, res);
	})
	app.post('/customers/new', function(req, res) {
		customers.add(req, res);
	})
	app.post('/customers/delete', function(req, res) {
		console.log('got to the routes with', req.body.id);
		customers.del(req, res);

	//////order routes//////order routes
	})
	app.get('/orders', function(req, res) {
		orders.show(req, res);
	})
	app.post('/orders/new', function(req, res) {
		orders.add(req, res);
	})

	//////product routes//////product routes
	app.get('/products', function(req, res) {
		products.show(req, res);
	})
	app.post('/products/new', function(req, res) {
		products.add(req, res);
	})
	app.post('/products/update', function(req, res) {
		products.update(req, res);
	})
}


