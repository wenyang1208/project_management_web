const urlParams = new URLSearchParams(window.location.search);
const taskId = urlParams.get('id');
const editbutton = document.getElementById("edit-button");

document.addEventListener("DOMContentLoaded", function () {

  fetch('http://localhost:5500/getById/' + taskId)
    .then(response => response.json())
    .then(taskData => {
      // Display the task data on the task.html page as needed
      displayTaskDetails(taskData.data[0]);

    })
    .catch(error => {
      console.error(error);
    });
})

//display the task details
function displayTaskDetails(taskData){

    // add task name
    const name = document.querySelector("#taskNameHeader");
    name.textContent = taskData.taskName;

    // add assignee
    const assigneeInfoLabel = document.querySelector("#asignees");
    assigneeInfoLabel.textContent = taskData.assignees;

    // add priority
    const priority = document.querySelector("#taskPriority");
    priority.textContent = taskData.taskPriority;

    // add story point
    const storyPoints = document.querySelector("#storyPoints");
    storyPoints.textContent = taskData.storyPoints;

    // add status
    const status = document.querySelector("#status");
    status.textContent = taskData.status;

    // add priority
    const stage = document.querySelector("#stages");
    stage.textContent = taskData.stages;
    
    // add task-description
    const taskDescription = document.querySelector("#task-description");
    taskDescription.textContent = taskData.taskDescription;

    // add tags
    const tagsContainer = document.querySelector(".tags-container");
    const tagArray = taskData.tags.split(",");
    for (let i = tagsContainer.children.length - 1; i >= 0; i--) {
        const child = tagsContainer.children[i];
        const textContent = child.textContent.trim();
      
        // Check if the textContent is in the validTags array
        if (!tagArray.includes(textContent)) {
          // If it's not in the valid tags, remove the child element
          tagsContainer.removeChild(child);
        }
      }

    // edit button
    editbutton.addEventListener("click",function(event){
    event.preventDefault()
    window.location.href=`edittask.html?id=${taskId}`
})

}