// To receive the input and display it
document.addEventListener("DOMContentLoaded", function () {
    const saveTaskButton = document.getElementById("saveTaskButton");

    // Click event for "Save" button
    saveTaskButton.addEventListener("click", function () {
        const taskNameInput = document.getElementById("taskName");
        const taskDescriptionInput = document.getElementById("taskDescription");
        const taskPrioritySelect = document.getElementById("taskPriority");
        const taskStageSelect = document.getElementById("stages");
        const taskAssigneeChosen = document.getElementById("asignees");

        // Get task name and description
        const taskName = taskNameInput.value;
        const taskDescription = taskDescriptionInput.value;
        const taskPriority = taskPrioritySelect.value;
        const taskStage = taskStageSelect.value;
        const taskAssignee = taskAssigneeChosen.value;

        // Add the new task to the savedTasks array
        if (taskName.trim() !== "") {
            // Load existing tasks from local storage
            const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            
            // Add the new task
            savedTasks.push({ name: taskName, 
                description: taskDescription, 
                priority: taskPriority, stage: taskStage});

            // Save the updated tasks array to local storage
            localStorage.setItem("tasks", JSON.stringify(savedTasks));

            // Navigate back to the index.html page
            window.location.href = "productBacklog.html";
        }
    });
});