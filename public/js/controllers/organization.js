app.controller('OrganizationCtrl', [ '$scope', 'OrganizationService', '$uibModal', function($scope, OrganizationService, $uibModal){

	getOrganizations();

	$scope.updateEditPanel = function (id){
		$scope.deleteId = id;
		$scope.organization = JSON.stringify($scope.organizations.filter ( function(item){
			return (item._id === id) ? true : false;
		})[0]);
		$scope.organization = JSON.parse($scope.organization);
		if ($scope.organization.creationDate){
			var creationDate = new Date($scope.organization.creationDate);
			$scope.organization.creationDate = new Date(creationDate.getFullYear(),creationDate.getMonth(),creationDate.getDate());
		}
	}

	$scope.deleteOrganization = function ( id ) {
		deleteOrganization( id );
		deleteIdAndOrganizationInfo();
	}

	$scope.editOrAddOrganization = function ( id ) {
		if ( !id ) {
			addOrganization ();
		} else {
			editOrganization ( id );
		}
	}

	$scope.updateAddNewOrganizationPanel = function () {
		deleteIdAndOrganizationInfo();
	}


	$scope.openDirectorSelectModal = function () {
	    var modalInstance = $uibModal.open({
	      animation: true,
	      size : 'sm',
	      templateUrl: 'templates/directorSelectModal.html',
	      controller: 'DirectorSelectModalCtrl'
	    });
	    modalInstance.result.then(function (director) {
	    	if (director){
	    		if (!$scope.organization){
	    			$scope.organization = {};
	    		}
		      	$scope.organization.director = director;
		      	$scope.organization.directorName = sliceDirectorString.call(director);
		    } else {
		    	if ($scope.organization){
		    		delete $scope.organization.director;
		    		delete $scope.organization.directorName;
		    	}
		    	
		    }
	    });
  	};

  	$scope.openTypeSelectModal = function () {
	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: 'templates/typeSelectModal.html',
	      controller: 'TypeSelectModalCtrl',
	      size: 'sm'
	    });
	    modalInstance.result.then(function (type) {
	    	if (type){
	    		if (!$scope.organization){
	    			$scope.organization = {};
	    		}
		      	$scope.organization.type = type;
		    } else {
		    	if ($scope.organization){
		    		delete $scope.organization.type;	
		    	}
		    }
	    });
  	};
  	function deleteIdAndOrganizationInfo(){
  		delete $scope.deleteId;
		delete $scope.organization;
  	}


  	function deleteOrganization ( id ){
  		OrganizationService.deleteOrganization(id).success (function(data){
  			openModalWithData('Организация успешно удалена');
			$scope.organizations = $scope.organizations.filter (function(item){
				return (item._id === id) ? false : true;
			})
		}).error(function(err){
			openModalWithData('Произошла ошибка удаления организации: ' + err);
		})
  	}
	function addOrganization () {
		OrganizationService.addOrganization( $scope.organization )
			.success (function(data){
				deleteIdAndOrganizationInfo();
				openModalWithData('Организация успешно добавлена');
				getOrganizations();
			}).error (function(err){
				openModalWithData('Произошла ошибка добавления организации: ' + err);
			})
	}
	function openModalWithData(data){
		$uibModal.open({
			animation: true,
			templateUrl: 'templates/confirmModal.html',
			controller: 'ConfirmModalCtrl',
			size: 'sm',
			resolve: {
				data : function(){
					return data;
				}
			}
		});
	}
	function sliceDirectorString(){
  		return this.surname + ' ' + this.name[0] + '.' + this.patronymic[0] + '.';
  	}

	function editOrganization (id) {
		OrganizationService.editOrganization( $scope.organization )
			.success (function(data){
				openModalWithData('Организация успешно обновлена');
				getOrganizations();
			}).error (function(err){
				openModalWithData('Произошла ошибка обновления организации : ' + err);
			})
	}

	function getOrganizations (){
		OrganizationService.getOrganizations()
		.success ( function (data,status){
			$scope.organizations = data;
			addDirectorToOrganization($scope.organizations);
		})
	}

	function addDirectorToOrganization(organizations){
		return organizations.map (function(item){
			if(item.director){
				item.directorName = sliceDirectorString.call(item.director);
			}
			return item;
		})
	}
}]);