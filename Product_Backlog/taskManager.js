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
        savedTasks.forEach(function (task, index) {
                // Create a task card with a link to view details
                const taskCard = document.createElement("div");
                taskCard.classList.add("cardview")
                taskCard.innerHTML = `<a href="task.html?id=${index}"><strong>${task.name}</strong>
                                        <br>Priority: ${task.priority}
                                        <br>Story Points: ${task.storyPoints}`;
                taskList.appendChild(taskCard);


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