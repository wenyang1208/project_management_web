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

// taskManager.js for productBacklog.html
const addTaskButton = document.getElementById("add-button");
const taskList = document.getElementById("card-views-container");
const NewToOld = document.getElementById("Newest-To-Oldest")
const OldToNew = document.getElementById("Oldest-To-Newest")
const UrgentToLow = document.getElementById("Urgent-To-Low")
const LowToUrgent = document.getElementById("Low-To-Urgent")
const savedTasks = [];
const originalTasks = [];
document.addEventListener("DOMContentLoaded", function(){

    const app = initializeApp(firebaseConfig);

    const db = getDatabase(app);
    const que = query(ref(db, "productBacklog/"), orderByChild("dateAdded"));
    get(que).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                savedTasks.push(childData)
                originalTasks.push(childData)
            });
    }}
    
    )
    .then(() => displayTasks(savedTasks))
    .catch((error) => {
        console.error("Error getting data:", error);
    });
    console.log(savedTasks)
    })


    // DISPLAY
    function displayTasks(taskData) {
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

    // Create the "tags-container" div
            // const tagsContainer = document.createElement("div");
            // tagsContainer.className = "tags-container";
            // let tagList = []
            // task.tags.forEach(tag => {
            //     if (tag == "Frontend"){
            //         const frontend = document.createElement("div")
            //         frontend.classList.add("tags")
            //         frontend.classList.add("tags1")
            //         tagList.push(frontend)
            //     }
            //     else if (tag == "Backend"){
            //         const backend = document.createElement("div")
            //         backend.classList.add("tags")
            //         backend.classList.add("tags2")
            //         tagList.push(backend);
            //     }
            //     else if (tag == "API"){
            //         const api = document.createElement("div")
            //         api.classList.add("tags")
            //         api.classList.add("tags3")
            //         tagList.push(api)
            //     }
            //     else if (tag == "Database"){
            //         const database=document.createElement('div')
            //         database.classList.add("tags")
            //         database.classList.add("tags4")
            //         tagList.push(database)
            //     }
            //     else if (tag == "Framework"){
            //         const framework=document.createElement('div');
            //         framework.classList.add("tags")
            //         framework.classList.add("tags5")
            //         tagList.push(framework)
            //     }
            //     else if (tag == "Testing"){
            //         const testing = document.createElement('div');
            //         testing.classList.add("tags")
            //         testing.classList.add("tags6")
            //         tagList.push(testing)
            //     }
            //     else if (tag == "UI"){
            //         const UI = document.createElement('div');
            //         UI.classList.add("tags")
            //         UI.classList.add("tags7")
            //         tagList.push(UI)
            //     }
            //     else if (tag == "UX"){
            //         const UX = document.createElement('div');
            //         UX.classList.add("tags")
            //         UX.classList.add("tags8")
            //         tagList.push(UX)
            //     }
            // })
            // tagList.forEach(tag =>{
            //     tagsContainer.appendChild(tag)
            // })
            const deletecheckbox = document.createElement("label")
            deletecheckbox.classList.add("custom-checkbox")
            deletecheckbox.classList.add("hidden-checkbox")
            const checkboxinput = document.createElement("input")
            checkboxinput.classList.add("delete-checkbox")
            checkboxinput.type = "checkbox"
            const checkmark = document.createElement("span")
            checkmark.classList.add("checkmark")
            deletecheckbox.appendChild(checkboxinput)
            deletecheckbox.appendChild(checkmark)

            taskCard.appendChild(taskName)
            taskCard.appendChild(priority)
            taskCard.appendChild(storyPoints)
            // taskCard.appendChild(tagsContainer)
            taskCard.appendChild(deletecheckbox)
            taskCard.addEventListener("click",function (){
                window.location.href = `task.html?taskId=${index}`})
            taskList.appendChild(taskCard);    


        });
    }


    // ADD
    addTaskButton.addEventListener("click", function () {
        window.location.href = "addtask.html"; 
    });



    // SORTING
    const displayPriority = {
        "Low":1,
        "Medium":2,
        "Important":3,
        "Urgent":4
    }

    NewToOld.addEventListener("click",function(){
        const reverseTasks = savedTasks.reverse()
        displayTasks(reverseTasks)
    })
    OldToNew.addEventListener("click",function(){
        displayTasks(originalTasks)
    })

    UrgentToLow.addEventListener("click",function(){
        const newTaskArray = savedTasks.sort((a,b)=>{
            const priorityA = displayPriority[a.taskPriority]
            const priorityB = displayPriority[b.taskPriority]
            return priorityB - priorityA
        })
        displayTasks(newTaskArray)
    })
    LowToUrgent.addEventListener("click",function(){
        const newTaskArray = savedTasks.sort((a,b)=>{
            const priorityA = displayPriority[a.taskPriority]
            const priorityB = displayPriority[b.taskPriority]
            return priorityA - priorityB
        })
        displayTasks(newTaskArray)
    })