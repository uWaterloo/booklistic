angular.module('portalApp')

// Widget controller - runs every time widget is shown
.controller('booklisticCtrl', ['$scope', '$http', '$q', 'booklisticFactory', function ($scope, $http, $q, booklisticFactory) {

    // Widget Configuration
    $scope.portalHelpers.config = {
        // make 'widgetMenu.html' the template for the top right menu
        "widgetMenu": "widgetMenu.html"
    };

    // Import variables and functions from service
    $scope.data = booklisticFactory.data;

    // initialize the service
    booklisticFactory.init($scope);

	// Show main view in the first column
	$scope.portalHelpers.showView('main.html', 1);
	
}])
// Factory maintains the state of the widget
.factory('booklisticFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
		
	var initialized = {value: false};

	// Your variable declarations
	var data = {value: null};

	var init = function ($scope) {
		if (initialized.value)
			return;
		
		initialized.value = true;

		// Place your init code here:
		data.value={message:"Welcome to Portal SDK!"};
	}


	// Expose init(), and variables
	return {
		init: init,
		data: data
	};

}])
// Custom directive example
.directive('booklisticDirectiveName', ['$http', function ($http) {
	return {
		link: function (scope, el, attrs) {

		}
	};
}])
// Custom filter example
.filter('booklisticFilterName', function () {
	return function (input, arg1, arg2) {
		// Filter your output here by iterating over input elements
		var output = input;
		return output;
	}
});