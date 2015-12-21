app.controller('TypesCtrl', [ '$scope', 'ReferenceBookService', '$uibModal', function($scope, ReferenceBookService, $uibModal){
	ReferenceBookService.getTypes().success(function(data,status){
		$scope.types = data;
	}).error(function(data,status){

	})
	$scope.deleteType = function (id){
		ReferenceBookService.deleteType(id).success(function(data,status){
			$scope.types = $scope.types.filter(function( item ){
				return (item._id === id) ? false : true;
			})
		})
	}
	$scope.open = function () {
	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: 'templates/typeAddModal.html',
	      controller: 'TypeAddModalCtrl',
	      size: 'sm'
	    });

	    modalInstance.result.then(function (type) {
	      $scope.types.push(type);
	    });
  	};
}]);
