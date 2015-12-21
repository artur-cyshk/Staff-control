app.controller('TypeAddModalCtrl', [ '$scope', 'ReferenceBookService', '$uibModalInstance', function($scope, ReferenceBookService, $uibModalInstance){
	$scope.addNewType = function(){
		ReferenceBookService.addType($scope.type)
			.success( 
				function (newType){
					$uibModalInstance.close(newType);
			})
			.error(function(data, status){
				if(status == "400 "){
					$scope.dupError = true;
				}
			})
	}
	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	}
}]);
