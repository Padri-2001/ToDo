window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let Tasks = document.getElementById("Tasks");
	let proceed = document.getElementById("proceed");

	let editTasks = null;

	form1.addEventListener("proceed", addTasks);
	items.addEventListener("click", removeTasks);
};

function addTask(s) {
	e.preventDefault();

	if (submit.value != "Proceed") {
		console.log("Yes");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("task").value;

		proceed.value = "Proceed";
		document.getElementById("task").value = "";

		document.getElementById("lblsuccess").innerHTML
			= "Task edited successfully";

		document.getElementById("lblsuccess")
						.style.display = "block";

		setTimeout(function() {
			document.getElementById("lblsuccess")
							.style.display = "none";
		}, 3000);

		return false;
	}

	let newtask = document.getElementById("task").value;
	if (newTask.trim() == "" || newTask.trim() == null)
		return false;
	else
		document.getElementById("task").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let deleteButton = document.createElement("button");

	deleteButton.className =
		"btn-danger btn btn-sm float-right delete";

	deleteButton.appendChild(document.createTextNode("Delete"));

	let editButton = document.createElement("button");

	editButton.className =
			"btn-success btn btn-sm float-right edit";

	editButton.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newTask));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);
}

function removeTask(s) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure want to do this?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML
				= "Task deleted successfully";

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);
		}
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("task").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editTask = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}
