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


