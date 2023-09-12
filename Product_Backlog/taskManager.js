// taskManager.js for productBacklog.html
document.addEventListener("DOMContentLoaded", function(){
    const addTaskButton = document.getElementById("add-button");
    const taskList = document.getElementById("taskList");

    // Testing purposes
    const clearTaskButton = document.getElementById("clearTasksButton")

    // Load tasks from local storage on page load
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to display tasks
    function displayTasks() {
        taskList.innerHTML = "";
        savedTasks.forEach(function (task) {
            const taskItem = document.createElement("div");
            taskItem.innerHTML = `<strong>${task.name}</strong>
                                    <br><em>Priority: ${task.priority}</em>
                                    <br>Story Points: ${task.description}`;
            taskList.appendChild(taskItem);
        });
    }

    // Click event for "Add Task" button
    addTaskButton.addEventListener("click", function () {
        window.location.href = "addtask.html"; // Navigate to the addtask.html page
    });

    // Click for clear all
    clearTaskButton.addEventListener("click", function(){
        localStorage.removeItem("tasks");
        savedTasks.length = 0;
        displayTasks()
    })

    // Display tasks on page load
    displayTasks();
})