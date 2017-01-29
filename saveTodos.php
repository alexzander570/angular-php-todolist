<?php 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	if(isset($request->newTodos))
		$todos = json_encode($request->newTodos);
	else
		$todos = '';
	file_put_contents('mocks/todos.json', $todos);
	echo 'Todo list saved successfully';
?>