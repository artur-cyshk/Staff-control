app.controller('TypeSelectModalCtrl', [ '$scope', 'ReferenceBookService', '$uibModalInstance', function($scope, ReferenceBookService, $uibModalInstance){
	ReferenceBookService.getTypes().success( function( data ) {
		$scope.types = data;
	})
	$scope.selectType = function() {
		$uibModalInstance.close( $scope.selectedType );		
	}
	$scope.cancel = function() {
		$uibModalInstance.dismiss( 'cancel' );
	}
}]);
