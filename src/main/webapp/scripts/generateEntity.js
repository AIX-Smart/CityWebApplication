/**
 * Created by jp on 08.12.15.
 */
cityApp.controller( 'generateCtrl', ['$scope', '$http', '$routeParams',
                                                  function ( $scope, $http, $routeParams ) {



                                                      $scope.generateCity= function(){


                                                          $http.put('../service/city/' + $scope.cityName  ).success( function ( data ) {

                                                              location.reload();

                                                          } );

                                                      }



                                                  }] );