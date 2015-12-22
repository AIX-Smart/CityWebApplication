var cityApp = angular.module('CityWebsite', [
    'ngRoute',
    'ui.bootstrap'

]);

cityApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/cityTable', {
            templateUrl: 'partials/entityTableCity.html',
            controller: 'CityTableCtrl'
        }).
        when('/locationTable', {
            templateUrl: 'partials/entityTableLocation.html',
            controller: 'LocationTableCtrl'
        }).
        when('/eventTable', {
            templateUrl: 'partials/entityTableEvent.html',
            controller: 'EventTableCtrl'
        }).
        when('/generate', {
            templateUrl: 'partials/generateEntity.html',
            controller: 'generateCtrl'
        }).
        when('/commentTable', {
            templateUrl: 'partials/entityTableComment.html',
            controller: 'CommentTableCtrl'
        }).
        when('/tagTable', {
            templateUrl: 'partials/entityTableTag.html',
            controller: 'TagTableCtrl'
        }).

        otherwise({
            redirectTo: '/cityTable'
        });
    }]);