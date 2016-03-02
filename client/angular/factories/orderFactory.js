myApp.factory('orderFactory', function($http) {
	var factory = {};
	var orders =[];
	factory.getOrders = function(callback) {
		$http.get('/orders').success(function(result) {
			orders = result;
			callback(orders);
		})
	}
	factory.addOrders = function(data, callback) {
		$http.post('/orders/new', {name: data.customername, product: data.product, quantity: data.quantity}).success(function(result){
			orders.push(result);
			callback(orders);
		})
	}
	return factory;
})