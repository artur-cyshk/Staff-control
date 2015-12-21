var app = angular.module('organizations', [
	'ui.router','ui.bootstrap'
]);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/organization');
        $stateProvider
            .state('home',{
                abstract : true,
                templateUrl: '/templates/home.html' 
            })
            .state('home.organization', { 
                url : '/organization',
                templateUrl: '/templates/organization.html',
                controller : 'OrganizationCtrl'
            })
            .state('home.referenceBook', {
                url: '/referenceBook',
                views: {

                    // the main template will be placed here (relatively named)
                    '': { templateUrl:  '/templates/referenceBook.html', controller : 'ReferenceBookCtrl' },

                    // the child views will be defined here (absolutely named)
                    'directors@home.referenceBook': { 
                        templateUrl: '/templates/organizationDirectors.html',
                        controller : 'DirectorsCtrl'
                     },

                    // for column two, we'll define a separate controller 
                    'types@home.referenceBook': { 
                        templateUrl: '/templates/organizationTypes.html',
                        controller : 'TypesCtrl'
                    }
                }
            });
    }
])