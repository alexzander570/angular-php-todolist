angular.module('todoListApp')
.directive('todos', function(){
	return {
		templateUrl : 'templates/todos.php',
		controller : 'mainCtrl',
		replace : true
	};	
});