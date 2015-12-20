var app = angular.module("homeApp");

app.service("HomeService",['$resource', function($resource){
	return $resource('/api/homes/:id', {id: '@_id'}, {
		update : {
			method: 'PUT'
		}
	});
}]);
		