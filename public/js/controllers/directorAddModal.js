app.controller('DirectorAddModalCtrl', [ '$scope', 'ReferenceBookService', '$uibModalInstance', function($scope, ReferenceBookService, $uibModalInstance){
	$scope.addNewDirector = function(){
		ReferenceBookService.addDirector($scope.director)
			.success( 
				function (newDirector){
					$uibModalInstance.close(newDirector);
			})
		
	}
	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	}
}]);
