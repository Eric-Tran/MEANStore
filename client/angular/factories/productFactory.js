myApp.factory('productFactory', function($http) {
	var factory = {};
	var products = [];
	factory.getProducts = function(callback) {
		$http.get('/products').success(function(result) {
			products = result;
			console.log('these products from factory',products)
			callback(products);
		})
	}
	factory.addProducts = function(data, callback) {
		$http.post('/products/new', {name: data.name, url: data.url, description: data.description, quantity: data.quantity}).success(function(result) {
			products.push(result);
			console.log('these are the products', products)
			callback(products);
		})
	}
	factory.updateProducts = function(data) {
		console.log('this is the data for update', data)
		$http.post('/products/update', {name: data.product, quantity: data.quantity}).success(function() {
			console.log('UPDATED!');
			});
	}
	return factory;
})