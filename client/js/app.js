var app = angular.module("homeApp",['ngRoute','ngResource']);

app.config(function($routeProvider, $locationProvider, $httpProvider){
  $routeProvider.when('/', {
    controller: "HomesController",
    templateUrl: "templates/index.html"
  }).when('/homes/new', {
    controller: "NewHomeController",
    templateUrl: "templates/new.html"
  }).when('/homes/:id', {
    controller: "HomeController",
    templateUrl: "templates/show.html"
  }).when('/homes/:id/edit', {
    controller: "EditHomeController",
    templateUrl: "templates/edit.html"
  }).otherwise({
    redirectTo:'/'
  });
  $locationProvider.html5Mode(true);
});
