app.controller('ConfirmModalCtrl', [ '$scope', '$uibModalInstance', 'data', function($scope, $uibModalInstance, data){
	$scope.info = data;
	$scope.cancel = function() {
		$uibModalInstance.dismiss( 'cancel' );
	}
}]);
