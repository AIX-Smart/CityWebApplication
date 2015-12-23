/**
 * Created by jp on 08.12.15.
 */
cityApp.controller( 'CityTableCtrl', ['$scope', '$http', '$routeParams',
                                                      function ( $scope, $http, $routeParams ) {

                                                          $http.get('../service/city/getAllCities' ).success( function ( data ) {

                                                              $scope.cities = data;

                                                          } );

                                                      }] );
cityApp.controller( 'LocationTableCtrl', ['$scope', '$http', '$routeParams',
                                      function ( $scope, $http, $routeParams ) {

                                          $http.get('../service/location/' ).success( function ( data ) {

                                              $scope.locations = data;

                                          } );

                                      }] );
cityApp.controller( 'EventTableCtrl', ['$scope', '$http', '$routeParams',
                                          function ( $scope, $http, $routeParams ) {

                                              $http.get('../service/event/getAllPosts' ).success( function ( data ) {

                                                  $scope.events = data;

                                              } );

                                          }] );

cityApp.controller( 'CommentTableCtrl', ['$scope', '$http', '$routeParams',
    function ( $scope, $http, $routeParams ) {

        $http.get('../service/comment/getAllComments' ).success( function ( data ) {

            $scope.comments = data;

        } );

    }] );

ityApp.controller( 'TagTableCtrl', ['$scope', '$http', '$routeParams',
    function ( $scope, $http, $routeParams ) {

        $http.get('../service/tag/all' ).success( function ( data ) {

            $scope.tags = data;

        } );

    }] );