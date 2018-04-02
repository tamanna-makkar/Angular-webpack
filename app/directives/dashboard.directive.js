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