// To receive the input and display it
document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("add-button");
    const taskInputPage = document.getElementById("task-input-page");
    const saveTaskButton = document.getElementById("saveTaskButton");
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
        taskInputPage.style.display = "block"; // Show the task input page
    });

    // Click event for "Save" button
    saveTaskButton.addEventListener("click", function () {
        const taskNameInput = document.getElementById("taskName");
        const taskDescriptionInput = document.getElementById("taskDescription");
        const taskPrioritySelect = document.getElementById("taskPriority");
        const taskStageSelect = document.getElementById("stages");

        // Get task name and description
        const taskName = taskNameInput.value;
        const taskDescription = taskDescriptionInput.value;
        const taskPriority = taskPrioritySelect.value;
        const taskStage = taskStageSelect.value;

        // Add the new task to the savedTasks array
        if (taskName.trim() !== "") {
            savedTasks.push({ name: taskName, 
                description: taskDescription, 
                priority: taskPriority, stage: taskStage});

            // Save the updated tasks array to local storage
            localStorage.setItem("tasks", JSON.stringify(savedTasks));

            // Display tasks
            displayTasks();

            // Clear input fields
            taskNameInput.value = "";
            taskDescriptionInput.value = "";

            // Hide the task input page
            taskInputPage.style.display = "none";
        }
    });

    // Display tasks on page load
    displayTasks();
});