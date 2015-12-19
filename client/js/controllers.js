var app = angular.module("homeApp");

app.controller("HomesController", function($scope, homeService){
	console.log('homes controller');
	// $scope.homes = {};


	homeService.getHomes().then(function(homes){
		$scope.homes = homes.data;
	}).catch(function(err){
		$scope.errors = err;
	});
});

app.controller("NewHomeController", function($scope, $location, homeService){
	$scope.addHome = function(home){
		homeService.addHome(home).then(function(){
		$location.path('/homes');
	});
	};
});

app.controller("ShowHomeController", function($scope, $routeParams, homeService){
		var id = $routeParams.id;
		homeService.getHome($routeParams.id).then(function(home){
		$scope.home = home.data;
	});

});

app.controller("EditHomeController", function($scope, $routeParams, homeService){
		console.log($routeParams.id + "This is is");
		homeService.editHome($routeParams.id).then(function(home){
		$scope.home = home.data;
	});


$scope.editHome = function(home){
	homeService.editHome(home).then(function(){
		$location.path('/homes');
	});
};

$scope.deleteHome = function(home){
	homeService.deleteHome(home._id).then(function(data){
		$location.path('/homes');
	});
};

});
