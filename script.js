const InputBox = document.getElementById("input-box");
const TaskContainer = document.getElementById("task-container");
function AddTask(){
    if(InputBox.value === ''){
        alert("Type something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = InputBox.value;
        TaskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    saveData();
}

TaskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("finished");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", TaskContainer.innerHTML);
}
function showTaskList(){
    TaskContainer.innerHTML = localStorage.getItem("data");
}
showTaskList();