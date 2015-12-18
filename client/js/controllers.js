var app = angular.module("homeApp",['ngRoute']);

app.controller("HomesController", function($scope, HomeService){
	HomeService.getHomes().then(function(homes){
		$scope.homes = homes.data;
	}).catch(function(err){
		$scope.errors = err;
	});
	});


app.controller("NewHomeController", function($scope, HomeService){
	$scope.addHome = function(home){
		HomeService.addHome(home).then(function(){
		$location.path('/homes');
	});
	};
});

app.controller("ShowHomeController", function($scope, HomeService){
		HomeService.getHome($routeParams.id).then(function(home){
		$scope.home = home.data;
	});

});

app.controller("EditHomeController", function($scope, HomeService){
		HomeService.getHome($routeParams.id).then(function(home){
		$scope.home = home.data;
	});


$scope.editHome = function(home){
	HomeService.editHome(home).then(function(){
		$location.path('/homes');
	});
};

$scope.deleteHome = function(home){
	HomeService.deleteHome(home._id).then(function(data){
		$location.path('/homes');
	});
};

});
