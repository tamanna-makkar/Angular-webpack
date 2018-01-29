webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('dashboard', []);
__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(7);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('dashboard').directive('simpleDirective', __webpack_require__(4));

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

function SimpleDirective() {
  return {
    restrict: 'E',
    template: "Directive Called"
  };
}
module.exports = SimpleDirective;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('dashboard').service('dashboardService', __webpack_require__(6));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DashboardService() {
    
		var _person = [
		   {name:'Services 1',type:'object'},
		   {name:'Services 2',type:'object'}
		]
		return {
			personData : _person 
		}
	
}
module.exports = DashboardService;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('dashboard').controller('dashboardController', __webpack_require__(8));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Injected service 
DashboardController.$inject = ['dashboardService','$scope'];
function DashboardController(dashboardService,$scope) {
	
   $scope.controllerValue = "Controller Called";
   $scope.person = dashboardService.personData;
}
module.exports = DashboardController;

/***/ })
],[1]);