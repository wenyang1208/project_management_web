// taskdetails.js (for taskdetails.html)
document.addEventListener("DOMContentLoaded", function () {
    const taskNameElement = document.getElementById("taskNameHeader");
    const taskDescriptionElement = document.getElementById("task-description");
    const taskPriorityElement = document.getElementById("taskPriority");
    const storyPointsElement = document.getElementById("storyPoints");
    const taskAssigneeElement = document.getElementById("asignees");
    const taskStageElement = document.getElementById("stages");
    const taskStatusElement = document.getElementById("status");
    const taskTagsElement = document.getElementById("tags");
    const editbutton = document.getElementById("edit-button")
    const saveTaskButton = document.getElementById("saveTaskButton");
    // const backButton = document.getElementById("backButton");

    // Get the task ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const taskId = urlParams.get("taskId");

    // Load tasks from local storage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Display task details
    if (taskId !== null && taskId >= 0 && taskId < savedTasks.length) {
        const task = savedTasks[taskId];
        taskNameElement.textContent = task.name;
        taskDescriptionElement.textContent = task.description;
        taskPriorityElement.textContent = task.priority;
        storyPointsElement.textContent = task.storyPoints;
        taskStageElement.textContent = task.stage;
        taskAssigneeElement.textContent = task.assignee;
        taskStatusElement.textContent = task.status;

    } else {
        taskNameElement.textContent = "Task not found.";
    }
    editbutton.addEventListener("click",function(event){
        event.preventDefault()
        window.location.href=`edittask.html?taskId=${taskId}`
    })

    // Click event for "Back to Backlog" button
    // backButton.addEventListener("click", function () {
    //     window.location.href = "index.html"; // Navigate back to the backlog
    // });
});