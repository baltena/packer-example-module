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