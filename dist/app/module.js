angular.module('packer.example.module', [
	'ngRoute'
])

//routing
.config(function($routeProvider) {
		$routeProvider.
        when('/peoplefinder/list', {
            templateUrl: 'views/peoplefinder/list.html',
            controller: 'peopleFinderListContoller'
        }). when('/peoplefinder/details/:contactId', {
            templateUrl: 'views/peoplefinder/details.html',
            controller: 'peopleFinderDetailContoller'
        });
	}
);
angular.module('packer.example.module')

.controller("peopleFinderDetailContoller", function($log, $scope, $routeParams, config, peopleFinderService){

	$log.debug("init peopleFinderDetailContoller");

	$scope.item = null;

    peopleFinderService.getDetails($routeParams.contactId).then(function(response) {
		$scope.item = response.data;
		$log.debug(response);
	});

});
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
angular.module('packer.example.module')

.service("peopleFinderService", function($http, config){

	var list = [];

    this.getList = function(){
        return list;
    };

    this.search = function(searchText){
        		
		return $http.get(config.peoplefinder.url + '/rest/people', {
            params : {
                search : searchText
            }
        }).
		success(function(data, status, headers, config) {
			list = data;
			return list;
		}).error(function(data, status, headers, config) {
			//alert("cannot connect to server");
			return [];
		});

    };

    this.getDetails = function(contactId){

		return $http.get(config.peoplefinder.url + '/rest/people/' + contactId).
		success(function(data, status, headers, config) {
			item = data;
			return item;
		}).error(function(data, status, headers, config) {
			alert("cannot connect to server");
			return null;
		});
    };
});
