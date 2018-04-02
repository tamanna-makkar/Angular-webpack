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