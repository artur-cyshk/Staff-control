app.controller('TypesCtrl', [ '$scope', 'ReferenceBookService', '$uibModal', function($scope, ReferenceBookService, $uibModal){
	ReferenceBookService.types().getList()
		.then(
			function success( data, status ) {
				$scope.types = data;
				$scope.active = true;
			}
		)

	$scope.deleteType = function ( id ) {
		$scope.types.forEach( function( type ) {
			if(type._id === id){
				type.id = type._id;
				type.remove()
					.then(
						function success() {
							$scope.types = $scope.types.filter( function( item ) {
								return ( item._id === id ) ? false : true;
							})
						}
					)
			}
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
	      $scope.types.push( type );
	    });
  	};
}]);
