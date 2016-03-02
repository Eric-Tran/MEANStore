myApp.controller('dashboardController', function($scope, productFactory, orderFactory, customerFactory) {
	$scope.product_limit = -4;
	$scope.order_limit = -3;
	$scope.customer_limit = -3;
	customerFactory.getCustomers(function (data) {
		$scope.customers = data;
	})
	orderFactory.getOrders(function (data) {
		$scope.orders = data;
	})
	productFactory.getProducts(function (data) {
		$scope.products = data;
	})
	$scope.moreProducts = function() {
		$scope.product_limit = -8;
	}
	$scope.moreOrders = function() {
		$scope.order_limit = -100;
	}
	$scope.moreCustomers = function() {
		$scope.customer_limit = -100;
	}
})