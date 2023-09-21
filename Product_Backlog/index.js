document.addEventListener('DOMContentLoaded',function(){
 
  fetch('http://localhost:5500/getAll')

  // parse the JSON data from the response
  .then(response => response.json())

  // data: the parsed JSON data from the first .then
  .then(data => console.log(data)); 
});

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
const displayTag = []
const tagsDisplay = document.querySelectorAll('.tags1, .tags2, .tags3, .tags4, .tags5, .tags6, .tags7, .tags8');
const tags = document.querySelectorAll('.tag1, .tag2, .tag3, .tag4, .tag5, .tag6, .tag7, .tag8');

tags.forEach(tagLink => {
  tagLink.addEventListener('change', function(event){
    event.preventDefault();
    const select = tagLink.textContent
    tag.push(select)
  })
});


// save
const savedButton = document.getElementById('save-button')
savedButton.addEventListener('click',function(event){

  const taskName = document.querySelector('#task');
  const taskDescription = document.querySelector('#task-description');
  const assignees = document.querySelector('#AssigneeList');
  // const storyPoints = document.querySelector('#storyPoints');
  const taskPriorities = document.querySelector('#priorities');
  const stages = document.querySelector("#SOT");
  const statuses = document.querySelectorAll('input[name="status"]');
  const categories = document.querySelectorAll('input[name="category"]');


  const name = taskName.value;
  const description = taskDescription.value;
  const assignee = assignees.value;
  const storyPoint = parseInt(storyPointsInput.value); 
  const taskPriority = taskPriorities.value;
  const stage = stages.value;
  
  var status = "";
  statuses.forEach(radio => {
    if (radio.checked) {
      status = radio.value;
    }
  });

  var category = "";
  categories.forEach(radio => {
    if (radio.checked) {
      category = radio.value;
    }
  });


  var taskTag = []
  tag.forEach(e => {
    taskTag.push(e)
  })

  taskName.value = "";
  taskDescription.value = "";
  assignees.value = "";
  storyPointsInput.value = "";
  taskPriorities.value = "";
  stages.value = "";
  statuses.value = "";
  tag.length = 0;
  categories.value = "";

  const taskDetail = {
    name : name,
    description : description,
    assignee: assignee,
    storyPoint: storyPoint,
    taskPriority: taskPriority,
    stage: stage,
    status: status,
    taskTag: taskTag,
    category : category
  }
  // making network HTTP requests, the url is where the request is sent to
  // second arg: options objects
  fetch('http://localhost:5500/insert',{

  // the request body will contain JSON data
    headers:{
      'Content-type': 'application/json'
    },

    // submit data to be processed to the url, other methods: GET, PUT, DELETE, OPTIONS, ...
    method: 'POST',

    // data to be sent, convert JS obj to JSON string
    body: JSON.stringify(taskDetail)
  })
  .then(response => response.json())
  // .then(window.location.href = "prodBacklog.html")
})