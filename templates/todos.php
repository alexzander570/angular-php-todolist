<div class="list">
	<div>
		<span class="message" ng-class='{success:"message.success"}'>{{message.msg}}</span>
	</div>
	<div class="add">
		<a href="" ng-click="addTodo()">+Add new TODO</a>
	</div>
	<div class="item" ng-repeat = 'todo in todos | orderBy : "completed"' ng-class = "{'editing-item':editing, 'edited': todo.edited, 'completed': todo.completed}">
		<input type="checkbox" ng-model="todo.completed"/>
		<span ng-click = 'todo.completed = !todo.completed'></span>
		<label ng-hide = 'editing' ng-click = 'editing = true;'>{{todo.name}}</label>
		<input type="text" class="editing-label" ng-blur = 'editing = false;' ng-show = 'editing' ng-model = "todo.name" ng-change = 'todo.edited = true'/>
		<div class="actions">
			<a href="" class="delete" ng-click='deleteTodo(todo.name, $index)'>Delete</a>
		</div>
	</div>
	<div class="item">
		<a href="" class="save-btn" ng-click = 'saveTodos()'>Save All</a>
	</div>
</div>