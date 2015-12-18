var app = angular.module("homeApp",['ngRoute']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){
	$routeProvider
	.when('/',{
		templateUrl: "templates/index.html",
		controller: "HomesController"
	})
	.when('/homes', {
		templateUrl: 'templates/index.html',
		controller: 'HomesController'
	})
	.when('/homes/new',{
		templateUrl: 'templates/new.html',
		controller: 'NewHomeController'
	})
	.when('/homes/:id/edit', {
		templateUrl: 'templates/edit.html',
		controller: 'EditHomeController'
	})
	.when('/homes/:id/show', {
		templateUrl: 'templates/show.html',
		controller: 'ShowHomeController'
	})
	.otherwise({redirectTo:"/"});
	
	$locationProvider.html5Mode(true);

}]);