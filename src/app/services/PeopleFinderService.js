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
