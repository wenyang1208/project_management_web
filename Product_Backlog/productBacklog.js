document.addEventListener('DOMContentLoaded',function(){
 
    fetch('http://localhost:5500/getAll')
  
    // parse the JSON data from the response
    .then(response => response.json())
  
    // data: the parsed JSON data from the first .then
    .then(data => displayTasks(data['data'])); 
  });


  const deleteTaskButton = document.getElementById("delete-button")
  const addTaskButton = document.getElementById("add-button");
  const taskList = document.getElementById("card-views-container");

  // display tasks
  function displayTasks(data) {
      taskList.innerHTML = "";
      if (typeof data !== 'undefined') {
        for (let i = 0; i < data.length; i++) {
          const { id, taskName, taskPriority, storyPoints, tags } = data[i];

          // Create a task card
          const taskCard = document.createElement("div");
          taskCard.classList.add("cardview");
          taskCard.id = id;
    
          // Create a link
          const link = document.createElement("a");
          link.href = "task.html";
    
          // Create task details
          const taskNameDiv = document.createElement("div");
          taskNameDiv.classList.add("task-name");
          taskNameDiv.textContent = taskName;
    
          const priorityDiv = document.createElement("div");
          priorityDiv.classList.add("priority");
          priorityDiv.textContent = `Priority: ${taskPriority}`;
    
          const storyPointsDiv = document.createElement("div");
          storyPointsDiv.classList.add("story-points");
          storyPointsDiv.textContent = `Story Points: ${storyPoints}`;
    
          // Create tags container
          const tagsPair = ['FrontEnd','BackEnd', 'API','Database','Framework','Testing','UI','UX']
          const tagArray = tags.split(",")
          const tagsContainer = document.createElement("div");

          tagsContainer.classList.add("tags-container");
          tagArray.forEach(element => {
            if (tagsPair.includes(element)){
              const tagDiv = document.createElement("div");
              tagDiv.classList.add("tags", `tags${tagsPair.indexOf(element)+1}`)
              tagsContainer.appendChild(tagDiv);
            }
          });

          // Create checkbox
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.classList.add("delete-checkbox");
    
          const label = document.createElement("label");
          label.classList.add("custom-checkbox","hidden-checkbox");
          label.appendChild(checkbox);
          label.innerHTML += '<span class="checkmark"></span>';
    
          // Append task details and checkbox to the link
          link.appendChild(taskNameDiv);
          link.appendChild(priorityDiv);
          link.appendChild(storyPointsDiv);
          link.appendChild(tagsContainer);
          link.appendChild(label);
    
          // Append the link to the task card
          taskCard.appendChild(link);
    
          // Append the task card to the task list
          taskList.appendChild(taskCard);
          }
      // console.log(taskList)
    }
  }

// add button
  addTaskButton.addEventListener("click", function () {
      window.location.href = "addtask.html"; // Navigate to the addtask.html page
  });


// delete button
  deleteTaskButton.addEventListener("click", function(event){
  // get all the hidden checkboxes of the taskList
  const checkboxes = taskList.querySelectorAll(".custom-checkbox");
  checkboxes.forEach(function (checkbox) {
    checkbox.style.display = "block"; // Set display to "block" to show the checkboxes
  });
  
    // Add a click event listener to the "Delete" button on the task cards
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent card click event from firing

        // Check if the checkbox is checked
        if (checkbox.querySelector("input[type='checkbox']").checked) {
          // Remove the task card
          const taskCard = checkbox.closest(".cardview");
          if (taskCard) {
            taskCard.remove();
          }
 
          // take the id from the taskCard 
          const id = taskCard.id
          fetch('http://localhost:5500/delete/' + id,{
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(data => console.log(data))
        }
      });
    });

});
  

  // Display tasks on page load
  displayTasks();