/**
 * Created by jp on 08.12.15.
 */
cityApp.controller('generateCtrl', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {


        $scope.generateCity = function () {


            $http.post('../service/city/' + $scope.cityName).success(function (data) {

                location.reload();

            });

        }

        $scope.generateLocation = function () {


            $http.post('../service/location/create/'
                + $scope.locationName + '/'
                + $scope.locationCityId + '/'
                + $scope.postalCode + '/'
                + $scope.locationStreet + '/'
                + $scope.locationPhonenumber + '/'
                + $scope.locationGPS + '/'
                + $scope.locationDescription + '/'
                + $scope.locationHousenumber + '/'
                + $scope.userMail + '/'
                + $scope.openHours +'/', "password").success(function (data) {

                location.reload();

            });

        }

        $scope.generatePost = function () {


            $http.post('../service/location/'
                + $scope.postUserId + '/'
                + $scope.postLocationId + '/'
                + $scope.postContent + '/').success(function (data) {

                location.reload();

            });

        }

        $scope.likePost = function () {

            $http.put('../service/event/'
                + $scope.likeEventId + '/'
                + $scope.likeUserId + '/', 'true').success(function (data) {

                location.reload();
            });

        }


        $scope.generateComment = function () {

            $http.post('../service/event/'
                + $scope.commentEventId + '/'
                + $scope.commentUserId, $scope.commentContent).success(function (data) {

                location.reload();
            });
        }

        $scope.generateTag = function () {

            $http.post('../service/tag/'
                + $scope.tagName).success(function (data) {

                location.reload();
            });
        }

        $scope.addTagToLocation = function () {

            $http.put('../service/location/'
                + $scope.locationId + '/'
                + $scope.tagId + '/addTag').success(function (data) {

                location.reload();
            });

        }

        $scope.removeTagFromLocation = function () {

            $http.put('../service/location/'
                + $scope.locationId + '/'
                + $scope.tagId + '/removeTag').success(function (data) {

                location.reload();
            });

        }


    }]);