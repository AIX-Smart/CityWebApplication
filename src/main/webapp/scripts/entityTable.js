/**
 * Created by jp on 08.12.15.
 */
cityApp.controller( 'tablesCtrl', ['$scope', '$http', '$routeParams',
                                                      function ( $scope, $http, $routeParams ) {

                                                          $http.get('../service/city/' + cityName ).success( function ( data ) {

                                                              $scope.cities = data;

                                                              location.reload();

                                                          } );

                                                      }] );