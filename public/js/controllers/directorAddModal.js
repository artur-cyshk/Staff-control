app.controller('DirectorAddModalCtrl', [ '$scope', 'ReferenceBookService', '$uibModalInstance', function($scope, ReferenceBookService, $uibModalInstance){
	$scope.addNewDirector = function() {
		ReferenceBookService.directors().post( $scope.director )
			.then( 
				function ( newDirector ) {
					$uibModalInstance.close( newDirector );
				}
			)
		
	}
	$scope.cancel = function() {
		$uibModalInstance.dismiss( 'cancel' );
	}
}]);
