const 
  taskNameElement = document.getElementById("task-name"),
  taskDescriptionElement = document.getElementById("task-description"),
  taskPriorityElement = document.getElementById("priorities"),
  storyPointsElement = document.getElementById("StoryPoints"),
  AssigneeListElement = document.getElementById("AssigneeList"),
  radioNotStarted = document.getElementById("Not Started"),
  radioInProgress = document.getElementById("In Progress"),
  radioCompleted = document.getElementById("Completed"),
  taskStageElement = document.getElementById("SOT"),
  taskTagsElement = document.getElementById("tags-container"),
  tagsOptionsElement = document.getElementById("tag-menu"),
  savebutton = document.getElementById("save-button"),
  FEoption = document.getElementById("FEoption"),
  BEoption = document.getElementById("BEoption"),
  APIoption = document.getElementById("APIoption"),
  DBoption = document.getElementById("DBoption"),
  FWoption = document.getElementById("FWoption"),
  TESToption = document.getElementById("TESToption"),
  UIoption = document.getElementById("UIoption"),
  UXoption = document.getElementById("UXoption"),
  tagOptionList = [FEoption,BEoption,APIoption,DBoption,FWoption,TESToption,UIoption,UXoption],
  FE = document.getElementById("FE"),
  BE = document.getElementById("BE"),
  API = document.getElementById("API"),
  DB = document.getElementById("DB"),
  FW = document.getElementById("FW"),
  TEST = document.getElementById("TEST"),
  UI = document.getElementById("UI"),
  UX = document.getElementById("UX"),
  tagDisplayList = [FE,BE,API,DB,FW,TEST,UI,UX],
  urlParams = new URLSearchParams(window.location.search),
  taskId = urlParams.get("taskId"),
  savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];



// Load tasks from local storage

document.addEventListener("DOMContentLoaded", function () {
  // const backButton = document.getElementById("backButton");

  // Display task details
  if (taskId !== null && taskId >= 0 && taskId < savedTasks.length) {
      const task = savedTasks[taskId];
      taskNameElement.textContent = task.name;
      taskDescriptionElement.value = task.description;
      storyPointsElement.value = task.storyPoints;
      const priorityToSelect = taskPriorityElement.querySelector(`option[value=${task.priority}]`)
      priorityToSelect.selected = true;
      const stageToSelect = taskStageElement.querySelector(`option[value=${task.stage}]`);
      stageToSelect.selected = true;
      const assigneeToSelect = AssigneeListElement.querySelector(`option[value=${task.assignee}]`);
      assigneeToSelect.selected = true;
      if (task.status == "Not Started"){
        radioNotStarted.checked=true;
      }
      else if (task.status == "In Progress"){
        radioInProgress.checked=true;
      }
      else if (task.status == "Completed"){
        radioCompleted.checked=true;
      }
      task.tags.forEach((taskTag)=>{
        if (taskTag == null){
          return;
        }
        else {
          tagOptionList.forEach((tag)=>{
            if (taskTag == tag.value) {
              tag.checked = true;
              tagDisplayList[tagOptionList.indexOf(tag)].style.display = "block"
            }
          })
        }
      })

  } else {
      taskNameElement.textContent = "Task not found.";
  }
});
savebutton.addEventListener("click",function(event){
  event.preventDefault()
  if (taskId !== null && taskId >= 0 && taskId < savedTasks.length) {
    const task = savedTasks[taskId]
    task.description = taskDescriptionElement.value
    task.storyPoints = storyPointsElement.value
    task.priority = taskPriorityElement.value
    if (radioNotStarted.checked == true) {
      task.status = "Not Started"
    }
    else if (radioInProgress.checked==true ) {
      task.status="In Progress"
    }
    else if (radioCompleted.checked==true ) {
      task.status="Completed";
    }
    tagOptionList.forEach((tag) => {
      if (tag.checked){
        task.tags.push(tag.value)
        console.log(tag.checked)
      }
      else {
          const index = task.tags.indexOf(tag.value)
          if (index != -1){
            task.tags.splice(index,1);
          }
      }
    })

    task.stage = taskStageElement.value
    task.assignee = AssigneeListElement.value
    savedTasks[taskId] = task
    localStorage.setItem("tasks",JSON.stringify(savedTasks))

  window.location.href = `task.html?taskId=${taskId}`
  }
})