'use strict';

angular.module('todoListApp').service('dataService', function($http){
	this.getTodos = function(callback){
		$http.get('mocks/todos.json').then(callback);
	};

	this.deleteTodo = function(todo){
		//alert('Deleted');
	};

	this.saveTodos = function(todos){
		/*console.log(todos);
		var request = $http({
			method:"post",
			url: window.location.href+'saveTodos.php',
			data: {
				newTodos: todos
			}
		});
		return request;*/
	}
});