app.factory('OrganizationService', ['Restangular', function( Restangular ){
	return {
		organizations : function() {
			return Restangular.all( 'organizations' );
		}
	}
}])
