app.controller('TypeAddModalCtrl', [ '$scope', 'ReferenceBookService', '$uibModalInstance', function($scope, ReferenceBookService, $uibModalInstance){
	$scope.addNewType = function() {
		ReferenceBookService.types().post( $scope.type )
			.then(
				function success( newType ) {
					$uibModalInstance.close( newType );
				}, 
				function error( data ) {
					if(data.status == "400 ") {
						$scope.dupError = true;
					}
				}
			)
	}
	$scope.cancel = function() {
		$uibModalInstance.dismiss( 'cancel' );
	}
}]);
