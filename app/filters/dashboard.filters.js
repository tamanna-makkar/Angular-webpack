'use strict';
function dashboardFilters(){
	return 	function(item){
		console.log("uppercaseFilter");
		return item.toUpperCase();
	};		
}
module.exports = dashboardFilters;