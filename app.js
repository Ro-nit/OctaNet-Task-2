const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        </div>
    `;

    const editButton = taskItem.querySelector('.edit-button');
    const deleteButton = taskItem.querySelector('.delete-button');

    editButton.addEventListener('click', () => editTask(taskItem));
    deleteButton.addEventListener('click', () => deleteTask(taskItem));

    taskList.appendChild(taskItem);

    taskInput.value = "";
}

function editTask(taskItem) {
    const taskText = taskItem.querySelector('span').innerText;
    const newTaskText = prompt("Edit your task:", taskText);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskItem.querySelector('span').innerText = newTaskText.trim();
    }
}

function deleteTask(taskItem) {
    if (confirm("Are you sure you want to delete this task?")) {
        taskItem.remove();
    }
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
