angular.module('packer.example.app', [
  'packer.example.module',
  'packer.example.mock'
])

//routing
.config(function($routeProvider) {
	$routeProvider
	.otherwise({
    	redirectTo: '/peoplefinder/list'
  	});
});