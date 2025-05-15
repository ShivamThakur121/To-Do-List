function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.textContent = taskText;
    span.onclick = () => span.classList.toggle("completed");
  
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => li.remove();
  
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
  