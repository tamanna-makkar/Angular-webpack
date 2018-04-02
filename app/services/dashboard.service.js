'use strict';

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