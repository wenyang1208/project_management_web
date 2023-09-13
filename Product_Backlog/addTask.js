// To receive the input and display it
document.addEventListener("DOMContentLoaded", function () {
    const saveTaskButton = document.getElementById("saveTaskButton");
    const taskForm = document.getElementById("taskForm")

    // Click event for "Save" button
    saveTaskButton.addEventListener("click", function (event) {
        event.preventDefault();
        const taskNameInput = document.getElementById("task-name");
        const taskDescriptionInput = document.getElementById("task-description");
        const taskPrioritySelect = document.getElementById("taskPriority");
        const taskStageSelect = document.getElementById("stages");
        const taskAssigneeChosen = document.getElementById("asignees");

        const radioNotStarted = document.getElementById("ns");
        const radioInProgress = document.getElementById("ip");
        const radioCompleted = document.getElementById("c");

        const storyPointsInput = document.getElementById("storyPoints");
        const taskTagsInput = document.getElementById("tags")

        // Get task inputs
        const taskName = taskNameInput.value;
        const taskDescription = taskDescriptionInput.value;
        const taskPriority = taskPrioritySelect.value;
        const taskStage = taskStageSelect.value;
        const taskAssignee = taskAssigneeChosen.value;
        let taskStatus = "";
        const storyPoints = storyPointsInput.value;
        // nned modify
        let taskTags = taskTagsInput.value;


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
                storyPoints: storyPoints, 
                tags: taskTags,
                
            });
            // // Function to display tasks
            // function displayTasks() {
            //     taskList.innerHTML = "";
            //     savedTasks.forEach(function (task, index) {
            //             // Create a task card with a link to view details
            //             const taskCard = document.createElement("div");
            //             taskCard.classList.add("cardview");

            //             taskCard.innerHTML = `<a href="task.html?id=${index}"><strong>${task.name}</strong>
            //                                     <br>Priority: ${task.priority}
            //                                     <br>Story Points: ${task.storyPoints}
            //                                     <br>Tags: ${task.tags}`;
            //             taskList.appendChild(taskCard);


            //     });
            // }

            // Save the updated tasks array to local storage
            localStorage.setItem("tasks", JSON.stringify(savedTasks));

            // Navigate back to the index.html page
            window.location.href = "prodBacklog.html";
        }
    });
});