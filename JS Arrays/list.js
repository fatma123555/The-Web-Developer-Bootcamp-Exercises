window.setTimeout(function() {
	const todos = ["Buy new Turtle"];

// ask user for input
let input = prompt("What would you like to do?");

// check input type

while (input !== "quit") {
	// handle input 
	if (input === "list") {
		console.log(todos);
	} else if (input === "new") {
		// ask for new todo
		const newTodo = prompt("Enter new todo");
		// add to todo array
		todos.push(newTodo);
	}
	// ask again for new input
	input = prompt("What would you like to do?");
}

console.log("Ok, you quite the app!");
}, 1000)

