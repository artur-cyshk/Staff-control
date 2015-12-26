app.controller('ReferenceBookCtrl', [ '$scope', function($scope){
	$scope.showTypes = true;
	$scope.setTab = function ( type ) {
		$scope.showTypes = ( type == 0 ) ? true  : false;
		$scope.showDirectors = ( type == 0 ) ? false : true; 
	}

}]);