app.controller('DirectorSelectModalCtrl', [ '$scope', 'ReferenceBookService', '$uibModalInstance', function($scope, ReferenceBookService, $uibModalInstance){
	ReferenceBookService.directors()
		.then(
			function( data ) {
				$scope.directors = data;
			})
	$scope.selectDirector = function() {
		$uibModalInstance.close( $scope.selectedDirector );		
	}
	$scope.cancel = function() {
		$uibModalInstance.dismiss( 'cancel' );
	}
}]);
