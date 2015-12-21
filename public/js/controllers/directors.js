app.controller('DirectorsCtrl', [ '$scope', 'ReferenceBookService', '$uibModal', function($scope, ReferenceBookService, $uibModal){
	ReferenceBookService.getDirectors().success(function(data, status){
		$scope.directors = data;
	})
	$scope.deleteDirector = function (id){
		ReferenceBookService.deleteDirector(id).success(function(data, status){
			$scope.directors = $scope.directors.filter(function( item ){
				return (item._id === id) ? false : true;
			})
		})
	}
	$scope.open = function () {
	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: 'templates/directorAddModal.html',
	      controller: 'DirectorAddModalCtrl',
	      size: 'sm'
	    });

	    modalInstance.result.then(function (director) {
	      $scope.directors.push(director);
	    });
  	};
}]);
