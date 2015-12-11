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