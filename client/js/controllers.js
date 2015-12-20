var app = angular.module("homeApp");

app.controller("HomesController", ['$scope', '$location', 'HomeService', function($scope, $location, HomeService){

  $scope.homes = HomeService.query();

  $scope.deleteHome = function(home){
    home.$delete(function(home){
      $scope.homes.splice($scope.homes.indexOf(home),1);
    });
  };
}]);

app.controller("NewHomeController", ['$scope', '$location', 'HomeService', function($scope, $location, HomeService){
  $scope.createHome = function(home){
    HomeService.save(home, function(){
      $location.path('/');
    });
  };
}]);

app.controller("HomeController", ['$scope', '$location', '$routeParams', 'HomeService', function($scope, $location, $routeParams, HomeService){
  HomeService.get({id: $routeParams.id}, function(home){
    $scope.home = home;
  }, function(err){
    $location.path('/');
  });
}]);


app.controller("EditHomeController", ['$scope', '$location', '$routeParams', 'HomeService', function($scope, $location, $routeParams, HomeService){
  HomeService.get({id: $routeParams.id},function(home){
    $scope.home = home;
  }, function(err){
    $location.path('/');
  });
  $scope.edithome = function(home){
    $scope.home.$update(function(){
      $location.path('/');
    });
  };
}]);
