var cityApp = angular.module( 'CityWebsite', [
    'ngRoute',
    'ui.bootstrap'

] );

cityApp.config( ['$routeProvider',
                     function ( $routeProvider ) {
                         $routeProvider.
                                 when( '/cityTable', {
                                     templateUrl: 'partials/entityTableCity.html',
                                     controller: 'CityTablesCtrl'
                                 } ).
                                 when( '/locationTable', {
                                     templateUrl: 'partials/entityTableLocation.html',
                                     controller: 'LocationTableCtrl'
                                 } ).
                                 when( '/generate', {
                                     templateUrl: 'partials/generateEntity.html',
                                     controller: 'generateCtrl'
                                 } ).
                                 otherwise( {
                                     redirectTo: '/cityTable'
                                 } );
                     }] );