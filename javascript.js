angular.module('portalApp')

// Widget controller - runs every time widget is shown
.controller('booklisticCtrl', ['$scope', '$http', '$q', 'booklisticFactory', function($scope, $http, $q, booklisticFactory) {

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
 		
    	$scope.query={};
         
    	$scope.clearSearch=function(){
            $scope.query.input='';
        }
        $scope.$watch('query.input', function(newvalue, oldvalue) {
            var buyitem=document.getElementById('unique'); 
            if(newvalue!=undefined && newvalue!=''){
                console.log('show');
                angular.element(buyitem).css('display','block');
            }else{
                console.log('hide');
               angular.element(buyitem).css('display','none');
            }
  		});  
        $scope.setPrice=function(){
            var price = prompt("Please set a price you want to sell");
    		if (price != null && price >= 0) {
                alert("You have set the price to be $" + price);
    		} else {
            	alert("The price you entered is not a valid price");
            }
        }
        $scope.currentBookDetail;
        $scope.post;
        $scope.tab = function(scenario) { 
            if (scenario == 'sell') {
                 $scope.portalHelpers.showView("sell.html", 1);
            } else if (scenario == 'mybook') { 
                $scope.portalHelpers.showView("mybook.html", 1);
            } else if (scenario == 'buy') { 
                $scope.portalHelpers.showView("main.html", 1);
            } else if (scenario == 'payment') {
            	$scope.portalHelpers.showView("payment.html", 3);
            }else {
                var step=$scope.content;
            	for(var i = 0; i < step.length; i++) {
  					if (step[i].SKU == scenario) {
  					$scope.currentBookDetail = step[i]; 
                    $scope.post = step[i].listing;
  					break;
  					}
  				}
                $scope.portalHelpers.showView("detail.html",2);
            }
        }
      $scope.content= [{
    author: 'Bella Forrest',
    title: 'ESSENTIALS OF ENGLISH',
    course:'EMLS 129R',
    status:'inhand',
    image:'http://ecx.images-amazon.com/images/I/51TZoV3kJ8L._SX331_BO1,204,203,200_.jpg',
    SKU: '9780131500907',
    originalPrice: 59.95,
    "listing": [
    {"Name":"Emily Kemps", "Price":"32.99"},
    {"Name":"Victoria Husslage", "Price":"25.99"},
    {"Name":"Natasha Wall", "Price":"33.59"}
    ],
    "history": [
    {"Name":"Victoria Husslage", "Price":"25.99"},
    {"Name":"Nora Roberts", "Price":"33.59"}
    ]
  }, {
    author: 'David Baldacci',
    title: 'LEAP  ADVANCED READING AND WRITING',
    course:'EMLS 129R',
    status:'inhand',
    image:'http://www.longmanhomeusa.com/media/book_covers/9782761352284.jpg',
    SKU: '9782761352284',
    originalPrice: 54.95,
    "listing": [
    {"Name":"Ann Howard Creel", "Price":"12.99"},
    {"Name":"Patricia Briggs", "Price":"23.99"},
    {"Name":"J.S. Scott", "Price":"31.59"}
    ],
    "history": [
    {"Name":"Ann Howard Creel", "Price":"12.99"},
    {"Name":"Patricia Briggs", "Price":"23.99"}
    ]
  }, {
    author: 'J. K. Rowling',
    title: 'CALCULUS : A COMPLETE COURSE W/ MYMATHLAB 8ED',
    course:'SYDE 112 ',
    status:'listed',
    image:'http://ecx.images-amazon.com/images/I/61t62mzguXL._SX377_BO1,204,203,200_.jpg',
    SKU: '9780321880215',
    originalPrice: 59.95,
    "listing": [
    {"Name":"Jeff Wheeler", "Price":"15.99"},
    {"Name":"M. S. Parker", "Price":"10.00"},
    {"Name":"J.S. Scott", "Price":"31.59"}
    ],
    "history": [
    {"Name":"Jeff Wheeler", "Price":"15.99"},
    {"Name":"J.S. Scott", "Price":"31.59"}
    ]
  }, {
    author: 'James Patterson',
    title: 'SOLID STATE PHYSICS',
    course: 'PHYS 435',
    status: 'sold',
    image: 'http://www.gatecounsellor.com/books/images/solid-state-physics-e1-9788177098594.jpg',
    SKU: '9780334650215',
    originalPrice: 213.95,
    "listing": [
    {"Name":"John Doe", "Price":"11.00"},
    {"Name":"John Smith", "Price":"65.00"},
    {"Name":"Peter Jones", "Price":"43.59"}
    ],
    "history": [
      {"Name":"John Smith", "Price":"65.00"},
      {"Name":"Peter Jones", "Price":"43.59"}
    ]
  }, {
    author: 'Audrey Carlan',
    title: ' LINEAR CIRCUITS (1ST CUSTOM ED FOR ECE 140/240)',
    course: 'ECE 140',
    status: 'inhand',
    image:'http://ecx.images-amazon.com/images/I/61dAL%2B%2BkTtL._SX258_BO1,204,203,200_.jpg',
    SKU: '9781259454974',
    originalPrice: 78.95,
    "listing": [
    {"Name":"Hao Chen", "Price":"22.00"},
    {"Name":"Anna Smith", "Price":"95.00"}
    ],
    "history": [
      {"Name":"Hao Chen", "Price":"22.00"},
    ]
  }, {
    author: 'Anne Hillerman',
    title: 'ENVIRONMENTAL CHEMISTRY 5ED LOOSELEAF',
    course: 'CHE 571',
    status: 'sold',
    image:'http://ecx.images-amazon.com/images/I/51IH3EWsaWL._SX408_BO1,204,203,200_.jpg',
    SKU: '9781464125041',
    originalPrice: 118.75,
    "listing": [
    {"Name":"John Doe", "Price":"11.00"},
    {"Name":"John Smith", "Price":"65.00"},
    {"Name":"Peter Jones", "Price":"43.59"}
    ],
    "history": [
      {"Name":"John Smith", "Price":"65.00"},
      {"Name":"Peter Jones", "Price":"43.59"}
    ]
  }, {
    author: 'Stephen King',
    title: ' MSCI 603: INTRODUCTION TO MATHEMATICAL PROGRAMMING',
    course: 'MSCI 603 ',
    status: '------',
    image:'http://ecx.images-amazon.com/images/I/41qisU1CwNL._SX398_BO1,204,203,200_.jpg',
    SKU: '281115918211',
    originalPrice: 75.13,
    "listing": [
    {"Name":"Jeff Wheeler", "Price":"15.99"},
    {"Name":"M. S. Parker", "Price":"10.00"},
    {"Name":"J.S. Scott", "Price":"31.59"}
    ],
    "history": [
    {"Name":"Jeff Wheeler", "Price":"15.99"},
    {"Name":"J.S. Scott", "Price":"31.59"}
    ]
  }, {
    author: 'Brandon Sanderson',
    title: 'MATHEMATICS FOR BIOLOGICAL SCIENTISTS',
    course: 'PHYS 225 ',
    status: '------',
    image:'http://ecx.images-amazon.com/images/I/41j6LCf4MfL._SX258_BO1,204,203,200_.jpg',
    SKU: '9780815341369',
    originalPrice: 93.50,
    "listing": [
    {"Name":"Emily Kemps", "Price":"32.99"},
    {"Name":"Victoria Husslage", "Price":"25.99"},
    {"Name":"Nora Roberts", "Price":"33.59"}
    ],
    "history": [
    {"Name":"Victoria Husslage", "Price":"25.99"},
    {"Name":"Nora Roberts", "Price":"33.59"}
    ]
  }, {
    author: 'Mariana Zapata',
    title: 'OPERATING SYSTEMS 3ED',
    course: 'MTE 241',
    status: 'listed',
    image:'http://www.giffiks.com/images/books/size_3/9788131712894.jpg',
    SKU: '9780201773446',
    originalPrice: 175.35,
    "listing": [
    {"Name":"Jeff Wheeler", "Price":"15.99"},
    {"Name":"M. S. Parker", "Price":"10.00"},
    {"Name":"J.S. Scott", "Price":"31.59"}
    ],
    "history": [
    {"Name":"Jeff Wheeler", "Price":"15.99"},
    {"Name":"J.S. Scott", "Price":"31.59"}
    ]
  }, {
    author: 'Dr. Seuss',
    title: 'MACROECONOMICS 7TH CDN ED',
    course: 'ECON 202 ',
    status: 'inhand',
    image:'http://ecx.images-amazon.com/images/I/51vTWUyOG4L._SX378_BO1,204,203,200_.jpg',
    SKU: '9780321952394',
    originalPrice: 169.95,
    "listing": [
    {"Name":"Mike Guo", "Price":"9.99"},
    {"Name":"Allen Hsieh", "Price":"101.40"},
    {"Name":"Thomas An", "Price":"86.39"}
    ],
    "history": [
    {"Name":"Grace Bai", "Price":"169.95"}
    ]
  }, {
    author: 'Cassandra Clare',
    title: 'E-TEXT FOR ABNORMAL PSYCHOLOGY 4TH CDN (MINDTAP 6-MONTH ACCESS)',
    course: 'PSYCH 257',
    status: 'sold',
    image:'http://ecx.images-amazon.com/images/I/71siqsFAsIL.jpg',
    SKU: '9780176701543',
    originalPrice: 99.95,
    "listing": [
    {"Name":"Emily Kemps", "Price":"32.99"},
    {"Name":"Victoria Husslage", "Price":"25.99"},
    {"Name":"Nora Roberts", "Price":"33.59"}
    ],
    "history": [
    {"Name":"Victoria Husslage", "Price":"25.99"},
    {"Name":"Nora Roberts", "Price":"33.59"}
    ]
  }];
    }])
    // Factory maintains the state of the widget
    .factory('booklisticFactory', ['$http', '$rootScope', '$filter', '$q', function($http, $rootScope, $filter, $q) {

        var initialized = {
            value: false
        };

        // Your variable declarations
        var data = {
            value: null
        };

        var init = function($scope) {
            if (initialized.value)
                return;

            initialized.value = true;

            // Place your init code here:
            data.value = {
                message: "Welcome to Portal SDK!"
            };
        }


        // Expose init(), and variables
        return {
            init: init,
            data: data
        };

    }])
    // Custom directive example
    .directive('booklisticDirectiveName', ['$http', function($http) {
        return {
            link: function(scope, el, attrs) {

            }
        };
    }])
    // Custom filter example
    .filter('booklisticFilterName', function() {
        return function(input, arg1, arg2) {
            // Filter your output here by iterating over input elements
            var output = input;
            return output;
        }
    });