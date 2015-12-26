app.controller('TypeSelectModalCtrl', [ '$scope', 'ReferenceBookService', '$uibModalInstance', function($scope, ReferenceBookService, $uibModalInstance){
	ReferenceBookService.types().getList()
		.then( 
			function success( data ) {
				$scope.types = data;
			})
	$scope.selectType = function() {
		$uibModalInstance.close( $scope.selectedType );		
	}
	$scope.cancel = function() {
		$uibModalInstance.dismiss( 'cancel' );
	}
}]);
