myApp.factory('customerFactory', function($http) {
	var factory = {};
	var customers = [];
	factory.getCustomers = function(callback) {
		$http.get('/customers').success(function(result) {
			customers = result;
			console.log(customers);
			callback(customers);
		})
	}
	factory.addCustomers = function(data, callback) {
		for(var i = 0; i < customers.length; i++) {
			if(data.name == customers[i].name) {
				return callback(false);
			}
		}
		$http.post('/customers/new', {name: data.name}).success(function(result) {
			customers.push(result);
			console.log(customers, 'adding');
			callback(customers);
		})
	}
	factory.removeCustomers = function(id, customer, callback) {
		console.log('GOT the the facotry!', id)
		$http.post('/customers/delete', {id: id}).success(function() {
			customers.splice(customers.indexOf(customer), 1);
			callback(customers);
		})
	}
	return factory;
})