var app = angular.module('organizations', ['ui.router', 'ui.bootstrap', 'restangular']);

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

                    '': { templateUrl:  '/templates/referenceBook.html', controller : 'ReferenceBookCtrl' },

                      'directors@home.referenceBook': { 
                        templateUrl: '/templates/organizationDirectors.html',
                        controller : 'DirectorsCtrl'
                     },
                    'types@home.referenceBook': { 
                        templateUrl: '/templates/organizationTypes.html',
                        controller : 'TypesCtrl'
                    }
                }
            });
    }
])