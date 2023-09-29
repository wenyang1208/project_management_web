// import { displayedTasks } from "./taskManager.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child, query, update } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyAk2H_8opCo31ebK1Ce_hZ5G36XNkydR1s",
    authDomain: "project-2782373696466964042.firebaseapp.com",
    databaseURL: "https://project-2782373696466964042-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-2782373696466964042",
    storageBucket: "project-2782373696466964042.appspot.com",
    messagingSenderId: "971400388443",
    appId: "1:971400388443:web:fc495758d4109f4a1f847e"
};

const 
  storyPointsElement = document.getElementById("StoryPoints"),
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
  increment = document.getElementById("increment"),
  decrement = document.getElementById("decrement"),
  tagDisplayList = [FE,BE,API,DB,FW,TEST,UI,UX],
  urlParams = new URLSearchParams(window.location.search),
  taskId = urlParams.get("taskId"),
  previousPage = document.getElementById("previous-page")


  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const name = document.querySelector("#task-name")
document.addEventListener("DOMContentLoaded", function () {

  name.textContent = taskId;


//--------------------------------------------------tags-----------------------------------------------------
//       task.tags.forEach((taskTag)=>{
//         if (taskTag == null){
//           return;
//         }
//         else {
//           tagOptionList.forEach((tag)=>{
//             if (taskTag == tag.value) {
//               tag.checked = true;
//               tagDisplayList[tagOptionList.indexOf(tag)].style.display = "block"
//             }
//           })
//         }
//       })

//   } else {
//       taskNameElement.textContent = "Task not found.";
  


//--------------------------------------------------story point-----------------------------------------------------
increment.addEventListener("click",function(){
  if (storyPointsElement.value != storyPointsElement.max){
    storyPointsElement.value = (parseInt(storyPointsElement.value)+1).toString()
  }
})
decrement.addEventListener("click",function(){
  if (storyPointsElement.value != storyPointsElement.min){
    storyPointsElement.value = (parseInt(storyPointsElement.value)-1).toString()
  }
})

//--------------------------------------------------check tag function-----------------------------------------------------
// function checkTag() {
//   tagOptionList.forEach(tag => {
//     if (tag.checked == true){
//       tagDisplayList[tagOptionList.indexOf(tag)].style.display = "block"
//     }
//     else {
//       tagDisplayList[tagOptionList.indexOf(tag)].style.display = "none"
//     }
//   })}
// const check = setInterval(checkTag,10)

//--------------------------------------------------save button-----------------------------------------------------
savebutton.addEventListener("click",function(event){
  event.preventDefault();
  console.log(document.querySelector('input[name="category"]:checked').value)
  

//--------------------------------------------------tags updated----------------------------------------------------- 
    // tagOptionList.forEach((tag) => {
    //   if (tag.checked){
    //     if (task.tags.indexOf(tag.value) != -1){
    //       return;
    //     }
    //     else{
    //       task.tags.push(tag.value)
    //     }
    //   }
    //   else {
    //       const index = task.tags.indexOf(tag.value)
    //       if (index != -1){
    //         task.tags.splice(index,1);
    //       }
    //   }
    // })
//--------------------------------------------------update data-----------------------------------------------------
    update(ref(db, 'productBacklog/' + taskId),
    {
      taskAssignee :document.querySelector("#AssigneeList").value,
      taskPriority :document.querySelector("#priorities").value,
      taskStage : document.querySelector("#SOT").value,
      taskStoryPoints : document.querySelector("#StoryPoints").value,
      taskStatus : document.querySelector('input[name="status"]:checked').value,      
      taskCategory : document.querySelector('input[name="category"]:checked').value,
      taskDescription : document.querySelector("#task-description").value
    })
    .then(() => { window.location.href = `task.html?taskId=${taskId}`});

})
previousPage.addEventListener("click",function(){
  window.location.href = `task.html?taskId=${taskId}`
})
}
);