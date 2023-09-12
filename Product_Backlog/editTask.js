// Function to update task details by task detail container ID
// when clicking on the Edit button, the task detail will be updated
function updateTaskDetailsByContainerId(containerId, newName, newPriority, newStoryPoints) {
    const taskDetailContainer = document.getElementById(containerId);
    if (taskDetailContainer) {
      const taskNameElement = taskDetailContainer.querySelector('.task-name');
      const priorityElement = taskDetailContainer.querySelector('.priority');
      const storyPointsElement = taskDetailContainer.querySelector('.story-points');
  
      if (taskNameElement && priorityElement && storyPointsElement) {
        taskNameElement.textContent = newName;
        priorityElement.textContent = `Priority: ${newPriority}`;
        storyPointsElement.textContent = `Story Points: ${newStoryPoints}`;
      }
    }
  }
  
  
  // Add an event listener to the "Edit" button
const editButton = document.querySelector('.button2');
editButton.addEventListener('click', e => {
// Fetch updated data and call updateTaskDetails with the new values
const updatedName = 'New Task Name';
const updatedPriority = 'Medium';
const updatedStoryPoints = 8;
updateTaskDetailsByContainerId("task detail", updatedName, updatedPriority, updatedStoryPoints);
});