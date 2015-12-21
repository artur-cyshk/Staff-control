app.factory('ReferenceBookService', ['$http', function($http){
	return {
		getDirectors: function() {
			return $http.get('/getDirectors');
		},
		getTypes : function () {
			return $http.get('/getTypes');
		},
		deleteDirector : function (id) {
			return $http.delete('/deleteDirector/' + id);
		},
		deleteType : function (id) {
			return $http.delete('/deleteType/' + id);
		},
		addType : function (type) {
			return $http.post('/addType', type);
		},
		addDirector : function (director) {
			return $http.post('/addDirector' , director);
		}
	}
}])