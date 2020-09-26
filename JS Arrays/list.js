window.setTimeout(function() {
	const todos = ["Buy new Turtle"];

// ask user for input
let input = prompt("What would you like to do?");

// check input type while it's not "quit"
while (input !== "quit") {
	// handle input 
	if (input === "list") {
		listTodos();

	} else if (input === "new") {
		addTodo();
	} else if (input === "delete"){
		deleteTodo();
	}
	// ask again for new input
	input = prompt("What would you like to do?");
}

function listTodos() {
	console.log('******');
	todos.forEach(function(todo, idx){
		console.log(idx + ': ' + todo);
	});
	console.log('******');
}

function addTodo() {
	// ask for new todo
	const newTodo = prompt("Enter new todo");
	// add to todo array
	todos.push(newTodo);
}

function deleteTodo() {
	// ask for index of todo to be deleted
	const index = prompt("Enter index of the todo to delete");
	// delete that entry in array
	todos.splice(index, 1);
	console.log("deleted todo");
}


console.log("Ok, you quite the app!");

 
}, 1000)

