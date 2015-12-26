app.controller('OrganizationCtrl', [ '$scope', 'OrganizationService', '$uibModal', 'Restangular', function($scope, OrganizationService, $uibModal, Restangular){

	getOrganizations();

	$scope.updateEditPanel = function ( id ) {
		$scope.deleteId = id;
		$scope.organization = JSON.stringify($scope.organizations.filter ( function( item ){
			return ( item._id === id ) ? true : false;
		})[0]);
		$scope.organization = JSON.parse( $scope.organization );
		if ( $scope.organization.creationDate ) {
			var creationDate = new Date( $scope.organization.creationDate );
			$scope.organization.creationDate = new Date(creationDate.getFullYear(), creationDate.getMonth(), creationDate.getDate());
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
	    modalInstance.result.then(function ( director ) {
	    	if ( director ){
	    		if ( !$scope.organization ) {
	    			$scope.organization = {};
	    		}
		      	$scope.organization.director = director;
		      	$scope.organization.directorName = sliceDirectorString.call( director );
		    } else {
		    	if ( $scope.organization ) {
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
	    modalInstance.result.then(function ( type ) {
	    	if ( type ) {
	    		if ( !$scope.organization ) {
	    			$scope.organization = {};
	    		}
		      	$scope.organization.type = type;
		    } else {
		    	if ( $scope.organization ) {
		    		delete $scope.organization.type;	
		    	}
		    }
	    });
  	};
  	function deleteIdAndOrganizationInfo() {
  		delete $scope.deleteId;
		delete $scope.organization;
  	}


  	function deleteOrganization ( id ) {
  		$scope.organizations.forEach( function( item ) {
  			if(item._id === id){
  				item.id = item._id;
  				item.remove()
	  				.then(
	  					function success() {
		  					openModalWithData('Организация успешно удалена');
							$scope.organizations = $scope.organizations.filter ( function( item ) {
								return (item._id === id) ? false : true;
							});
		  				},
		  				function error( err ) {
		  					openModalWithData('Произошла ошибка удаления организации: ' + err);
		  				}
		  			)
  			}
  		})
  	}
	function addOrganization () {
		OrganizationService.organizations().post( $scope.organization )
			.then(
				function success( item ) {
					deleteIdAndOrganizationInfo();
					openModalWithData('Организация успешно добавлена');
					getOrganizations();
				},
				function error( err ) {
					openModalWithData('Произошла ошибка добавления организации: ' + err.message);
				}
			)
	}
	function openModalWithData(data){
		$uibModal.open( {
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
	function sliceDirectorString() {
  		return this.surname + ' ' + this.name[0] + '.' + this.patronymic[0] + '.';
  	}

	function editOrganization (id) {
		$scope.organizations.forEach(function( organization ) {
			if( organization._id === id ) {
				var newOrganization = Restangular.copy( organization );
				for( var key in $scope.organization ) {
					newOrganization[key] = $scope.organization[key];
				}
				newOrganization.id = $scope.organization._id;
				newOrganization.put()
					.then(
						function success() {
							openModalWithData('Организация успешно обновлена');
							getOrganizations();
						}, 
						function error( err ) {
							openModalWithData('Произошла ошибка обновления организации : ' + err);
						}
					);
			}
		})
	}

	function getOrganizations () {
		OrganizationService.organizations().getList()
			.then(
				function success( data ) {
					$scope.organizations = data;
					addDirectorToOrganization( $scope.organizations );
				}
			)
		
	}

	function addDirectorToOrganization( organizations ) {
		return organizations.map (function( item ) {
			if( item.director ) {
				item.directorName = sliceDirectorString.call( item.director );
			}
			return item;
		})
	}
}]);