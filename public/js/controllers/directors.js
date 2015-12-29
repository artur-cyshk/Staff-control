app.controller('DirectorsCtrl', [ '$scope', 'ReferenceBookService', '$uibModal', function($scope, ReferenceBookService, $uibModal){
	ReferenceBookService.directors().getList()
		.then(
			function success( data ) {
				$scope.directors = data;
				$scope.active = true;
			}
		)

	$scope.deleteDirector = function ( id ) {
		$scope.directors.forEach( function( director ) {
			if(director._id === id) {
				director.id = director._id;
				director.remove()
					.then(	
						function success() {
							$scope.directors = $scope.directors.filter(function( item ) {
								return (item._id === id) ? false : true;
							})
						}
					)
			}
		})
	}

	$scope.open = function () {
	    var modalInstance = $uibModal.open( {
	      animation: true,
	      templateUrl: 'templates/directorAddModal.html',
	      controller: 'DirectorAddModalCtrl',
	      size: 'sm'
	    });

	    modalInstance.result.then( function ( director ) {
	      $scope.directors.push( director );
	    });
  	};
}]);
