// Not finish yet
urlParams = new URLSearchParams(window.location.search),
taskId = urlParams.get("id"),
document.addEventListener("DOMContentLoaded", function () {
fetch('http://localhost:5500/getById/' + taskId)
    .then(response => response.json())
    .then(taskData => {
    // Display the task data on the task.html page as needed
    console.log(taskData);

    })
    .catch(error => {
    console.error(error);
    });
})

// story points:
const decrementButton = document.querySelector(".decrement-button");
const incrementButton = document.querySelector(".increment-button");
const storyPointsInput = document.getElementById("StoryPoints");
decrementButton.addEventListener("click", function () {
  const currentValue = parseInt(storyPointsInput.value);
  if (currentValue > 1) {
    storyPointsInput.value = currentValue - 1;
  }
});

incrementButton.addEventListener("click", function () {
  const currentValue = parseInt(storyPointsInput.value);
  if (currentValue < 10) {
    storyPointsInput.value = currentValue + 1;
  }
});

// select tags
const tag = []
const tags = document.querySelectorAll('.tag1, .tag2, .tag3, .tag4, .tag5, .tag6, .tag7, .tag8');

tags.forEach(tagLink => {
  tagLink.addEventListener('change', function(event){
    const select = tagLink.textContent
    if (event.target.checked === true){
      console.log(event.target.checked)
      event.preventDefault();
      tag.push(select)
    } 
    else{
      // Checkbox is unchecked, remove from the 'tag' array
      const index = tag.indexOf(select);
      if (index !== -1) {
        tag.splice(index, 1); // Remove one item at the found index
      }
    }
  })
});


// const savedButton = document.getElementById("save-button");
// savedButton.addEventListener('click', function(event){
//     const taskDescription = document.querySelector('#task-description');
//     const assignees = document.querySelector('#AssigneeList');
//     const taskPriorities = document.querySelector('#priorities');
//     const stages = document.querySelector("#SOT");
//     const statuses = document.querySelectorAll('input[name="status"]');
// })

