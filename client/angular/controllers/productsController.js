myApp.controller('productsController', function($scope, productFactory) {
	productFactory.getProducts(function (data) {
		$scope.products = data;
	})
	$scope.addProduct = function() {
		productFactory.addProducts($scope.newproduct, function(data) {
			$scope.products = data;
			$scope.newproduct ={};
		})
	}
	$scope.range = function(min, max) {
		var input = [];
		for( var i =min; i <= max; i++) {
			input.push(i);
		}
		return input;
	}
})