for(let val of tasks){
    document.getElementById("task-cards").innerHTML += `
<div class="col">
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
        <p class="btn btn-success PriorityBtn">Priority</p>
        </div>
    </div>
</div>`;
}

let buttons = document.getElementsByClassName("PriorityBtn");

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
}



