webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('dashboard', []);
__webpack_require__(2);
__webpack_require__(6);
__webpack_require__(8);
__webpack_require__(10);
__webpack_require__(12);
__webpack_require__(14);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);


angular.module('dashboard').directive('simpleDirective', __webpack_require__(4));
angular.module('dashboard').directive('notepaddDirective', __webpack_require__(5));

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

function SimpleDirective() {
  return {
	scope:{
		color:'@',
		sayHello:'&'
	},  
    restrict: 'E',
    template: "<div style='background-color:{{color}}'>Directive Called</div>",
	link: function(scope,elem,attrs,ctrl,transclude){
		elem.bind('click', function(){
			elem.css('background-color','white');
			scope.$apply(function(){
				scope.color= 'white';
			});
		});
		elem.bind('mouseover',function(){
			elem.css('cursor','pointer');	
		});
		scope.sayHello();
	}
  };
}
module.exports = SimpleDirective;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function notepaddDirective(){
	return {
		scope:true,
		restrict:'EA',
		template:
						'<div id="editor" contenteditable="true" ng-model="entertext.list" ng-bind="entertext.list" ng-show="editArea">' +	
						'</div>' + 
						'<a href="#" ng-model="addButton" ng-show="addButton" ng-click="addNote()">Add note</a>' +	
						'<a href="#" ng-model="backButton" ng-show="backButton" ng-click="back()">Back</a>' 
					,
		link: function(scope,elem,attrs){
			scope.editArea = false;	
			scope.backButton = false;
			scope.addButton = true;
			
			scope.entertext = {
				list:'hey',
				id:''
			}
			
			scope.addNote = function(){
			   scope.editArea = true;
				if(scope.editArea == true){
					scope.addButton = false;
					scope.backButton = true;
				}	
			}
			 var editor = elem.find('#editor');
			 console.log('editor',editor);
			 editor.bind('keydown keypress', function(events) {
				 console.log("lets type");
				scope.entertext.list = editor.text().trim();
				console.log("bindEvent",scope.entertext.list);
			 });
			// Event on Back Button
			scope.back = function(){
				console.log("text",scope.entertext.list);
				scope.restore();
			}
			scope.restore = function() {
				scope.addButton = true;
				scope.backButton = false;
				scope.editArea = false;
				scope.index = -1;
			};
			// Event on Adding the Notes
			scope.$watch('entertext.list', function(latest,old){
				 console.log(latest,'latest');	
			     //scope.entertext.list = latest;		   
			});
			
			
		}	
	}	
}
module.exports = notepaddDirective;




/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('dashboard').service('dashboardService', __webpack_require__(7));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DashboardService() {
    
		var _person = [
		   {name:'Services 1',type:'object'},
		   {name:'Services 2',type:'object'}
		]
		function sayHello(text){
			return "Service Says -- hello" + " " + text + "!";
		}
		return {
			personData : _person, 
			sayHello: sayHello
		}
		
		
	
}
module.exports = DashboardService;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('dashboard').factory('dashboadFactory', __webpack_require__(9));

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function DashboardFactory(){
   return {
	   sayHello: function(text){
		   return "Factory Says --" + " " + text + "!";
	   }
   }
   
}
module.exports = DashboardFactory;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module("dashboard").provider('dashboadProvider', __webpack_require__(11));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function dashboardProvider(){
	return {
		$get: function(){
			function Data(){
				console.log("This is the Console From Providers");
				var Mention = "This is Variable Under Provider";
				var Mention2 = "This is Variable 2nd Under Provider";
				return [Mention,Mention2];
			}
			return {
			   Data:Data,
			}
	
		}
	} 
}
module.exports = dashboardProvider;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('dashboard').controller('dashboardController' , __webpack_require__(13));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Injected service 
DashboardController.$inject = ['dashboardService','$scope','dashboadFactory','dashboadProvider'];
function DashboardController(dashboardService,$scope,dashboadFactory,dashboadProvider) {
	
   $scope.controllerValue = "Controller Called";
   $scope.person = dashboardService.personData;
   $scope.color = 'blue';
   $scope.resetColor = function(){
	   $scope.color = 'white';
   }
   // function needs to be executed from the directive
   $scope.sayHelloe = function(){
	  //console.log("Hello is from controller");     
   }
   // Services 
   $scope.FromServices = dashboardService.sayHello("Services World");
   // factories
   $scope.FromFactory = dashboadFactory.sayHello("Factories World");
   // Providers
   $scope.ProvidersDate = dashboadProvider.Data();
    console.log("$scope.ProvidersDate",$scope.ProvidersDate);
   $scope.contactPersons = [
	   {
		 id:'1',  
		 email:'james01@gmail.com',
         label:'James',
         selected:false,		 
         		 
	   },{
		  id:'2',
          email:'james02@gmail.com',
          label:'James02',
           selected:false,		  
	   },{
		   id:'3',
		   email:'james03@gmail.com',
		   label:'James03',
		    selected:false,
	   }	   
   ]
   $scope.newDate = new Date();
   // filters
   $scope.personData = "custom filters";
   // StartsWith Filter
   $scope.Data = [
	  {key: '01' , name : 'anu'},
	  {key: '02' , name : 'chinu02'},
	  {key: '03' , name : 'Aia03'},
	  {key: '04' , name : 'anu04'},
	  {key: '05' , name : 'anu05'},
	  {key: '06' , name : 'anu06'}
   ]
}
module.exports = DashboardController;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('dashboard').filter('dashboardFilterss',__webpack_require__(15));
angular.module('dashboard').filter('startsWith', __webpack_require__(16));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function dashboardFilters(){
	return 	function(item){
		console.log("uppercaseFilter");
		return item.toUpperCase();
	};		
}
module.exports = dashboardFilters;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function startsWith(){
	return function(item){
	     /* if(item.startsWith("a") == true || item.startsWith("A") == true){
			 return item;
		 } */  
		 /* if(item.substring(0,1) == "a"){
             return item;				 
		 } */  
		 return item.filter(function (item){
			return /a/i.test(item.name.substring(0,1));
		}); 
	}
}
module.exports = startsWith;

/***/ })
],[1]);