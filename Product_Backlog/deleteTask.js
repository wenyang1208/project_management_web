document.addEventListener("DOMContentLoaded", function () {
    const deleteButton = document.getElementById("delete-button");
    const checkboxes = document.querySelectorAll(".custom-checkbox");

    deleteButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default behavior of the anchor tag
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
  
            const taskId = taskCard.id;
            removeTaskFromStorage(taskId);
          }
        });
      });
    });
  });
  
  function removeTaskFromStorage(taskId) {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    const updatedTasks = savedTasks.filter(function (task) {
      return task.id !== taskId;
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

