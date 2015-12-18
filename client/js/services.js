app.service("homeService", function($http){
	return {
		getHomes: function(){
			return $http.get('api/homes');
		},
		addHome: function(home){
			return $http.post('api/homes', home);
		},
		editHome: function(home){
			return $http.get('api/homes/' + home._id, home);
		},
		getHome: function(home){
			return $http.get('api/homes/' + id);
		},
		deleteHome: function(home){
			return $http.delete('api/homes/' + id);
		}

	};
});