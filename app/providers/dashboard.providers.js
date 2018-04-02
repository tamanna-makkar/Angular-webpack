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