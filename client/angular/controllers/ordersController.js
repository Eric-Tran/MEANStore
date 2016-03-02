myApp.controller('ordersController', function($scope, orderFactory, customerFactory, productFactory){
	customerFactory.getCustomers(function (data) {
		$scope.customers = data;
	})
	orderFactory.getOrders(function (data) {
		$scope.orders = data;
	})
	productFactory.getProducts(function (data) {
		$scope.products = data;
	})
	$scope.addOrder = function() {
		orderFactory.addOrders($scope.newOrder, function(data) {
			console.log(data, 'here is data back from factory')
			$scope.orders = data;
			$scope.newOrder = {};
		})
		productFactory.updateProducts($scope.newOrder);
		productFactory.getProducts(function (data) {
		$scope.products = data;
	})
	}
})