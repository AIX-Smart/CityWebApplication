/**
 * Created by jp on 08.12.15.
 */
timetrackerControllers.controller( 'generateCtrl', ['$scope', '$http', '$routeParams',
                                                  function ( $scope, $http, $routeParams ) {


                                                      $http.get( '../service/users/'
                                                                 + $routeParams.userId ).success( function ( data ) {
                                                          $scope.user = data;

                                                      } );


                                                      $scope.generateCity= function(newCity){

                                                          newCity.id = 1;

                                                          $http.put('../service/city/create', newCity )

                                                      }



                                                  }] );