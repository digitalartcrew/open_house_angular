var app = angular.module("homeApp",['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/homes', {
		templateUrl: 'templates/index.html',
		controller: HomesController
	})
	.when('/homes/new',{
		templateUrl: 'templates/new.html',
		controller: NewHomeController
	})
	.when('/homes/:id/edit', {
		templateUrl: 'templates/edit.html',
		controller: EditHomeController
	})
	.when('/homes/:id/show', {
		templateUrl: 'templates/show.html',
		controller: ShowHomeController
	});
});