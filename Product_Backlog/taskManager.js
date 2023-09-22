// taskManager.js for productBacklog.html
const addTaskButton = document.getElementById("add-button");
const taskList = document.getElementById("card-views-container");

// Testing purposes
const clearTaskButton = document.getElementById("clearTasksButton")

// Load tasks from local storage on page load
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    taskList.innerHTML = "";
    savedTasks.forEach(function (task, index) {
        // Create a task card with a link to view details
        const taskCard = document.createElement("div");
        taskCard.classList.add("cardview");
        taskCard.id = `${index}`;
        // Create a link element inside the div with an href attribute
        //const linkElement = document.createElement("a");
        //linkElement.href = `task.html?taskId=${index}`;

// Create the "task-name" div with the text "Task 1"
        const taskName = document.createElement("div");
        taskName.className = "task-name";
        taskName.textContent = task.name;

// Create the "priority" div with the text "Priority: High"
        const priority = document.createElement("div");
        priority.className = "priority";
        priority.textContent = `Priority: ${task.priority}`;

// Create the "story-points" div with the text "Story Points: 5"
        const storyPoints = document.createElement("div");
        storyPoints.className = "story-points";
        storyPoints.textContent = `Story Points: ${task.storyPoints}`;

// Create the "tags-container" div
        const tagsContainer = document.createElement("div");
        tagsContainer.className = "tags-container";
        let tagList = []
        task.tags.forEach(tag => {
            if (tag == "Frontend"){
                const frontend = document.createElement("div")
                frontend.classList.add("tags")
                frontend.classList.add("tags1")
                tagList.push(frontend)
            }
            else if (tag == "Backend"){
                const backend = document.createElement("div")
                backend.classList.add("tags")
                backend.classList.add("tags2")
                tagList.push(backend);
            }
            else if (tag == "API"){
                const api = document.createElement("div")
                api.classList.add("tags")
                api.classList.add("tags3")
                tagList.push(api)
            }
            else if (tag == "Database"){
                const database=document.createElement('div')
                database.classList.add("tags")
                database.classList.add("tags4")
                tagList.push(database)
            }
            else if (tag == "Framework"){
                const framework=document.createElement('div');
                framework.classList.add("tags")
                framework.classList.add("tags5")
                tagList.push(framework)
            }
            else if (tag == "Testing"){
                const testing = document.createElement('div');
                testing.classList.add("tags")
                testing.classList.add("tags6")
                tagList.push(testing)
            }
            else if (tag == "UI"){
                const UI = document.createElement('div');
                UI.classList.add("tags")
                UI.classList.add("tags7")
                tagList.push(UI)
            }
            else if (tag == "UX"){
                const UX = document.createElement('div');
                UX.classList.add("tags")
                UX.classList.add("tags8")
                tagList.push(UX)
            }
        })
        tagList.forEach(tag =>{
            tagsContainer.appendChild(tag)
        })
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
        taskCard.appendChild(tagsContainer)
        taskCard.appendChild(deletecheckbox)
        taskCard.addEventListener("click",function (){
            window.location.href = `task.html?taskId=${index}`})

// Create individual "tags" divs and add them to the "tags-container"


        taskList.appendChild(taskCard);


    });
}
document.addEventListener("DOMContentLoaded", function(){

    // Function to display tasks

    // Display tasks on page load
    displayTasks();
})
    // Click event for "Add Task" button
    addTaskButton.addEventListener("click", function () {
        window.location.href = "addtask.html"; // Navigate to the addtask.html page
    });

    // Click for clear all
    clearTaskButton.addEventListener("click", function(){
        localStorage.removeItem("tasks");
        savedTasks.length = 0;
        displayTasks()
    })