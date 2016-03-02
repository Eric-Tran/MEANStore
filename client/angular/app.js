var myApp = angular.module('myApp', ['ngRoute', 'angularMoment']);
myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/dashboard', {
			templateUrl: '/partials/dashboard.html'
		})
		.when('/products', {
			templateUrl: '/partials/products.html'
		})
		.when('/orders', {
			templateUrl: '/partials/orders.html'
		})
		.when('/customers', {
			templateUrl: '/partials/customers.html'
		})
		.when('/settings', {
			templateUrl: '/partials/settings.html'
		})
		.otherwise({
			redirectTo:'/'
		})
});