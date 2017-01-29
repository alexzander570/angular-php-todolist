'use strict';

angular.module('todoListApp').controller('mainCtrl', function($scope, dataService, $http){	
	
	dataService.getTodos(function(response){
		$scope.todos = response.data;
		$scope.newTodos = response.data;
	});
	
	$scope.addTodo = function(){
		var todo = {'name':"Add New Todo","completed":false};
		if($scope.todos == null || $scope.todos == ''){
			$scope.todos = [todo];
		}else{
			$scope.todos.unshift(todo);
		}
		$scope.newTodos = $scope.todos;
	};

	$scope.deleteTodo = function(todo, $index){
		dataService.deleteTodo(todo);
		$scope.todos.splice($index, 1);
		$scope.newTodos = $scope.todos;
	};

	$scope.saveTodos = function(){

		var request = $http({
			method:"post",
			url: window.location.href+'saveTodos.php',
			data: {
				newTodos: $scope.newTodos
			},
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).then(function mySucces(response) {
			alert(response.data);
		}, function myError(response) {
			console.log(response.statusText);
		});
	};
});