app.factory('ReferenceBookService', ['Restangular', function(Restangular){
	return {
		directors : function() {
			return Restangular.all( 'directors' );
		},
		types : function () {
			return Restangular.all( 'types' );
		}
	}
}])