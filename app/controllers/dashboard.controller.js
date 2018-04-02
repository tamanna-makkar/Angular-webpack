'use strict';

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