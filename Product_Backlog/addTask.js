// To receive the input and display it
document.addEventListener("DOMContentLoaded", function () {
    const saveTaskButton = document.getElementById("saveTaskButton");
    const taskForm = document.getElementById("taskForm")

    // Click event for "Save" button
    saveTaskButton.addEventListener("click", function (event) {
        event.preventDefault();
        const taskNameInput = document.getElementById("taskName");
        const taskDescriptionInput = document.getElementById("taskDescription");
        const taskPrioritySelect = document.getElementById("taskPriority");
        const taskStageSelect = document.getElementById("stages");
        const taskAssigneeChosen = document.getElementById("asignees");

        const radioNotStarted = document.getElementById("ns");
        const radioInProgress = document.getElementById("ip");
        const radioCompleted = document.getElementById("c");

        // Get task inputs
        const taskName = taskNameInput.value;
        const taskDescription = taskDescriptionInput.value;
        const taskPriority = taskPrioritySelect.value;
        const taskStage = taskStageSelect.value;
        const taskAssignee = taskAssigneeChosen.value;
        let taskStatus = "";

        // Determine and select Status
        if (radioNotStarted.checked){
            taskStatus = radioNotStarted.value
        } else if (radioInProgress.checked){
            taskStatus = radioInProgress.value
        } else if (radioCompleted.checked){
            taskStatus = radioCompleted.value
        }

        // Add the new task to the savedTasks array
        if (taskName.trim() !== "" && taskStatus!== "") {
            // Load existing tasks from local storage
            const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            
            // Add the new task
            savedTasks.push({ name: taskName, 
                description: taskDescription, 
                priority: taskPriority, 
                stage: taskStage, 
                assignee: taskAssignee, 
                status: taskStatus,
            });

            // Save the updated tasks array to local storage
            localStorage.setItem("tasks", JSON.stringify(savedTasks));

            // Navigate back to the index.html page
            window.location.href = "prodBacklog.html";
        }
    });
});