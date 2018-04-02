function DashboardFactory(){
   return {
	   sayHello: function(text){
		   return "Factory Says --" + " " + text + "!";
	   }
   }
   
}
module.exports = DashboardFactory;