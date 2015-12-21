app.factory('OrganizationService', ['$http', function($http){
	return {
		getOrganizations : function() {
			return $http.get('/getOrganizations');
		},
		addOrganization : function ( organization ) {
			return $http.post ('/addOrganization' , organization);
		},
		editOrganization : function (organization){
			return $http.post ('/editOrganization', organization);
		},
		deleteOrganization : function (id){
			return $http.delete ('/deleteOrganization/'+ id);
		}
	}
}])
