// taskManager.js for productBacklog.html
document.addEventListener("DOMContentLoaded", function(){
    const addTaskButton = document.getElementById("add-button");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage on page load
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to display tasks
    function displayTasks() {
        taskList.innerHTML = "";
        savedTasks.forEach(function (task) {
            const taskItem = document.createElement("div");
            taskItem.innerHTML = `<strong>${task.name}</strong>
                                    <br>${task.description}
                                    <br><em>Priority: ${task.priority}</em>`;
            taskList.appendChild(taskItem);
        });
    }

    // Click event for "Add Task" button
    addTaskButton.addEventListener("click", function () {
        window.location.href = "addtask.html"; // Navigate to the addtask.html page
    });

    // Display tasks on page load
    displayTasks();
})