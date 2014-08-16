angular.module('packer.example.module')

.controller("peopleFinderListContoller", function($log, $scope, $http, $location, config, peopleFinderService){

	$log.debug("init peopleFinderListContoller");

	$scope.list = [];

    $scope.search = function () {

		peopleFinderService.search($scope.searchText).then(
		function(value) {
			$scope.list = value.data;
		});
    };

    $scope.elasticSearch = function () {
        if ($scope.searchText.length > 3) {
            $scope.search();
        } else {
            $scope.list = [];
        }
    };


    $scope.goToDetail = function (item) {
        $location.path("/peoplefinder/details/" + item.id);
    };

});