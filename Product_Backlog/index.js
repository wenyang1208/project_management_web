document.addEventListener('DOMContentLoaded',function(){
  fetch('http://localhost:5000/getAll')

  // parse the JSON data from the response
  .then(response => response.json())

  // data: the parsed JSON data from the first .then
  .then(data => console.log(data)); 
});

// select tags
const tag = []
const tags = document.querySelectorAll('.dropup-content a');
tags.forEach(tagLink => {
  tagLink.addEventListener('click', function(event){
    event.preventDefault();
    const select = this.getAttribute('data-tag')
    console.log(select)
    console.log("asdoijaosfoijoij")
    tag.push(select)
  })
});


// save
const savedButton = document.getElementById('saveTaskButton')
savedButton.addEventListener('click',function(event){

  const taskName = document.querySelector('#task-name');
  const taskDescription = document.querySelector('#task-description');
  const assignees = document.querySelector('#asignees');
  const storyPoints = document.querySelector('#storyPoints');
  const taskPriorities = document.querySelector('#taskPriority');
  const stages = document.querySelector("#stages");
  const statuses = document.querySelectorAll('input[name="status"]');
 

  const name = taskName.value;
  const description = taskDescription.value;
  const assignee = assignees.value;
  const storyPoint = parseInt(storyPoints.value); 
  const taskPriority = taskPriorities.value;
  const stage = stages.value;
  
  var status = "";
  statuses.forEach(radio => {
    if (radio.checked) {
      status = radio.value;
    }
  });

  var taskTag = []
  tag.forEach(e => {
    taskTag.push(e)
  })

  taskName.value = "";
  taskDescription.value = "";
  assignees.value = "";
  storyPoints.value = "";
  taskPriorities.value = "";
  stages.value = "";
  statuses.value = "";
  tag.length = 0;

  const taskDetail = {
    name : name,
    description : description,
    assignee: assignee,
    storyPoint: storyPoint,
    taskPriority: taskPriority,
    stage: stage,
    status: status,
    taskTag: taskTag
  }
  // making network HTTP requests, the url is where the request is sent to
  // second arg: options objects
  fetch('http://localhost:5000/insert',{

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
  .then(data => displayAddedTask(data['data']))

})

function displayAddedTask(data){
  window.location.href = "prodBacklog.html";
  console.log(data)
}