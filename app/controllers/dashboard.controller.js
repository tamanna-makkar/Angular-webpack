'use strict';

// Injected service 
DashboardController.$inject = ['dashboardService','$scope'];
function DashboardController(dashboardService,$scope) {
	
   $scope.controllerValue = "Controller Called";
   $scope.person = dashboardService.personData;
}
module.exports = DashboardController;