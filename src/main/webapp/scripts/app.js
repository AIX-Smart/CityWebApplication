var cityApp = angular.module( 'CityWebsite', [
    'ngRoute',
    'ui.bootstrap'

] );

cityApp.config( ['$routeProvider',
                     function ( $routeProvider ) {
                         $routeProvider.
                                 when( '/tables', {
                                     templateUrl: 'partials/entityTables.html',
                                     controller: 'tablesCtrl'
                                 } ).
                                 when( '/generate', {
                                     templateUrl: 'partials/generateEntity.html',
                                     controller: 'generateCtrl'
                                 } ).
                                 otherwise( {
                                     redirectTo: '/tables'
                                 } );
                     }] );