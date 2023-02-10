//This block of code concerns the task-cards. They take the objects from taskdata.js and display them in the browser using cards.

function displayTasks () {for(let val of tasks){              
    document.getElementById("task-cards").innerHTML += `
        <div class="col taskcard">
            <div class="card shadow" style="width: 18rem;">
                <img src="${val.image}" class="card-img-top imgSize" alt="${val.taskName}">
                <div class="card-body">
                <h5 class="card-title">${val.taskName}</h5>
                <hr>
                <p class="description">${val.description}</p>
                <hr>
                <p class="periodical">${val.periodical}</p>
                <hr>
                <p>Priority-Level: <span class="priority p-1 rounded text-light">${val.priority}</span></p>
                <p class="btn btn-outline-dark PriorityBtn">Priority</p>
                <hr>
                <div class="d-flex justify-content-between">
                <p class="btn btn-outline-danger Delete">Delete</p>
                <p class="btn btn-outline-success Done">Done</p>
                </div>
                </div>
            </div>
        </div>`;
}}

displayTasks();

//This function sorts the array of tasks descending by priority.

function sorting () {tasks.sort(function(a, b) {            
    return b.priority - a.priority;  
})
displayTasks()
}

//This gives <p>Sort Priority</p> the ability to sort the tasks array

document.getElementById("sortPriority").addEventListener("click",sorting); 

console.log(tasks);



 //This part concerns the priority buttons. They augment the priority-level. 0-1 priority is green, 2-3 priority is orange, 4-5 priority is red. 
 //Priority-display will not surpass 5.

let buttons = document.getElementsByClassName("PriorityBtn");
let deletebtns = document.getElementsByClassName("Delete")
let donebtns = document.getElementsByClassName("Done")

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function() {            
        tasks[i].priority++;                                     
        console.log(tasks[i].priority);
        document.getElementsByClassName("priority")[i].innerHTML = tasks[i].priority;
        if (tasks[i].priority < 2) {
            document.getElementsByClassName("priority")[i].style.backgroundColor = "green";
        } else if (tasks[i].priority < 4){
            document.getElementsByClassName("priority")[i].style.backgroundColor = "orange";
        } else {
            document.getElementsByClassName("priority")[i].style.backgroundColor = "red";
        }
        if (tasks[i].priority > 5){
            document.getElementsByClassName("priority")[i].innerHTML = "5";
        }
    })
        //The delete-button removes the associated task-card from the display.
    deletebtns[i].addEventListener("click", function() {            
        document.getElementsByClassName("taskcard")[i].style.display = "none";
    })
    //The Done-button turns the card-div background-color to green.
    donebtns[i].addEventListener("click", function() {              
        document.getElementsByClassName("card")[i].style.backgroundColor = "rgb(0, 181, 121, 0.2)";
    })
}