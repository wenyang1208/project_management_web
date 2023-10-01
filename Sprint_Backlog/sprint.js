import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child, query, orderByChild } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyAk2H_8opCo31ebK1Ce_hZ5G36XNkydR1s",
    authDomain: "project-2782373696466964042.firebaseapp.com",
    databaseURL: "https://project-2782373696466964042-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-2782373696466964042",
    storageBucket: "project-2782373696466964042.appspot.com",
    messagingSenderId: "971400388443",
    appId: "1:971400388443:web:fc495758d4109f4a1f847e"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const taskList = document.getElementById("card-views-container");
const savedTasks = [];
const originalTasks = [];
document.addEventListener("DOMContentLoaded", function(){

    const que = query(ref(db, "selectedTasks/"));
    get(que).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                savedTasks.push(childData)
                originalTasks.push(childData)
            });
    }}
    
    )
    .then(() => {console.log(savedTasks)})
    .then(() => displayTasks(savedTasks))
    .catch((error) => {
        console.error("Error getting data:", error);
    });
    console.log(savedTasks)
    })


    // DISPLAY
    function displayTasks(taskData) {
        if (taskList !== null){
            console.log(taskData)
            taskList.innerHTML = "";
            taskData.forEach(function (task, index) {
    
                const taskCard = document.createElement("div");
                taskCard.classList.add("cardview");
                taskCard.id = `${index}`;
    
    
                const taskName = document.createElement("div");
                taskName.className = "task-name";
                taskName.textContent = task.taskName;
    
                const priority = document.createElement("div");
                priority.className = "priority";
                priority.textContent = `Priority: ${task.taskPriority}`;
    
    
                const storyPoints = document.createElement("div");
                storyPoints.className = "story-points";
                storyPoints.textContent = `Story Points: ${task.taskStoryPoints}`;


                // testing displaying tags
                const tags = document.createElement("div");
                tags.className = "tags"
                tags.textContent = `Tags: ${task.taskTags}`;
                taskCard.appendChild(taskName)
                taskCard.appendChild(priority)
                taskCard.appendChild(storyPoints)
                taskCard.appendChild(tags)
                taskCard.addEventListener("click",function (){
                window.location.href = `task.html?taskId=${taskName.textContent}`})
                taskList.appendChild(taskCard);    
            });
        }
        return taskData;
    }
