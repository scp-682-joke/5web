const tasks = [];
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

document.getElementById("add-task").addEventListener("click", function () {
    const text = taskInput.value.trim();
    if (text === "") {
        return;
    }

    const task = { text: text, completed: false };
    tasks.push(task);

    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";

    checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked;
        taskText.classList.toggle("completed", task.completed);
    });

    deleteButton.addEventListener("click", function () {
        tasks.splice(tasks.indexOf(task), 1);
        item.remove();
    });

    label.appendChild(checkbox);
    label.appendChild(taskText);
    item.appendChild(label);
    item.appendChild(deleteButton);
    taskList.appendChild(item);
    taskInput.value = "";
});
