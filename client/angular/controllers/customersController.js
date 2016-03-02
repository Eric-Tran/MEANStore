myApp.controller('customersController', function($scope, customerFactory) {
	customerFactory.getCustomers(function (data) {
		$scope.customers = data;
	})
	$scope.addCustomer = function() {
		customerFactory.addCustomers($scope.new_customer, function (data) {
			if(data == false) {
				$scope.error ={};
			} else {
			$scope.customers = data;
			$scope.new_customer = {};
			$scope.error = false;
		}
		})
	}
	$scope.removeCustomer = function(id, customer) {
		console.log("this is the id", id);
		customerFactory.removeCustomers(id, customer, function(data) {
			$scope.customers = data;
		})
	}
})
