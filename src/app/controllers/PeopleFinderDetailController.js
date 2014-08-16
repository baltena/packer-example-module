angular.module('packer.example.module')

.controller("peopleFinderDetailContoller", function($log, $scope, $routeParams, config, peopleFinderService){

	$log.debug("init peopleFinderDetailContoller");

	$scope.item = null;

    peopleFinderService.getDetails($routeParams.contactId).then(function(response) {
		$scope.item = response.data;
		$log.debug(response);
	});

});